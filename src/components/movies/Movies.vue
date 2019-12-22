<template>
  <div v-if="popularMovies.length" class="col-12 movies">
    <div class="row row-cols-1 row-cols-sm-2 justify-content-between align-items-center mt-3">
      <div class="col-12">
        <h2 class="movies__title m-sm-0 text-danger">Popular Movies</h2>
      </div>
      <div class="col-12 d-flex align-items-center">
        <p class="mb-0 movies__select-text">Sort&nbsp;By</p>
        <b-form-select v-model="selected" :options="options" :state="true" @change="sortBy"/>
      </div>
    </div>
    <div class="row justify-content-around">
      <Movie
        v-for="movie in filteredMovies"
        :key="movie.id"
        :movie="movie"
        :width="width"
        :style="`max-width:${width.max + 'rem'}; min-width:${width.min  + 'rem'}`"
      />
    </div>
    <div class="row no-gutters">
      <div class="col-12">
        <b-pagination
          align="fill"
          variant="dark"
          v-model="currentPage"
          @change="onPageChange"
          :total-rows="totalPages"
          :per-page="perPage"
          size="sm"
          class="movies__pagination mx-lg-5 px-lg-5"
        />
      </div>
    </div>
  </div>
  <div v-else class="d-flex justify-content-center align-items-center flex-grow-1">
    <Spinner />
  </div>
</template>

<script>
  import { getPopularMovies } from  '../../api';
  import Movie from './Movie';
  import Spinner from  '../spinner/Spinner';

  export default {
    name: 'Movies',
    components: {
      Movie,
      Spinner,
    },
    data() {
      return {
        popularMovies: [],
        filteredMovies: [],
        currentPage: 1,
        perPage: 20,
        totalPages: null,
        width: {
          max: 12,
          min: 11
        },
        selected: 'popularity',
        options: [
          { value: 'popularity', text: 'Popularity' },
          { value: 'title', text: 'Title' },
          { value: 'release_date', text: 'Date' },
          { value: 'vote_average', text: 'Rating' },
          { value: 'vote_count', text: 'Votes' },
        ],
        sign: 1,
        sort: {
          number: (a, b) => a[this.selected] > b[this.selected] ? this.sign : -this.sign,
          string: (a, b) => a[this.selected].localeCompare(b[this.selected]),
        }
      };
    },

    created() {
      this.getMoviesByPopular();
    },
    methods: {
      getMoviesByPopular() {
        getPopularMovies(this.currentPage)
          .then(res => {
            const response = res.data;
            this.popularMovies = response.results;
            this.filteredMovies = this.popularMovies;
            this.currentPage = response.page;
            this.totalPages = response.total_pages;
          })
      },
      onPageChange(page) {
        this.currentPage = page;
        this.getMoviesByPopular();
      },
      sortBy() {
        const sortWith = typeof this.popularMovies[0][this.selected];
        this.filteredMovies.sort(this.sort[sortWith]);
      }
    }
  };
</script>

<style lang="scss">
  @import '../../assets/scss/variables.scss';

  .movies__title {
    font-size: 25px;
    text-align: left;
    font-weight: bold;
  }
  .movies__select-text {
    width: 7rem;
    padding: 0.4rem 0;
    background-color: $gray-200;
    border: 1px solid $gray-400;
    border-radius: 0.3rem;
  }
  .movies__pagination {
    .page-item.active .page-link {
      background-color: $bg-black;
      border-color: transparent;
      color: $gray-100;
    }
    .page-link,
    .page-item.disabled .page-link {
      color: $gray-600;
      font-weight: bold;
      border-color: $gray-500;

      &:hover {
        color: $bg-black;
        background-color: $gray-300;
        border-color: transparent;
      }
      &:focus {
        box-shadow: none;
      }
    }
  }
</style>
