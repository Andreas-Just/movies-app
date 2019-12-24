<template>
  <div v-if="popularMovies.length" class="col-12 movies">
    <div class="row justify-content-between align-items-center mt-3">
      <div class="col-sm-5 col-lg-6 no-gutters px-2">
        <h2 class="movies__title m-sm-0 text-danger">Popular Movies</h2>
      </div>
      <div class="col-sm-7 col-lg-6 d-flex align-items-center pl-0 pr-2">
        <b-form-select
          v-model="selected"
          :options="options"
          :state="true"
          @change="sortBy"
        />
        <p class="mb-0 movies__sort">order</p>
        <button
          class="movies__sort-btn p-0"
          @click="sortOrder"
        >
          <md-arrow-dropdown-circle-icon v-if="flag" w="40px" h="40px" animate="beat" class="md-arrow-icon" />
          <md-arrow-dropup-circle-icon v-else w="40px" h="40px" animate="beat" class="md-arrow-icon" />
        </button>
      </div>
    </div>
    <div class="row justify-content-around">
      <Movie
        v-for="movie in popularMovies"
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
        currentPage: 1,
        perPage: 20,
        totalPages: null,
        width: {
          max: 12,
          min: 11
        },
        selected: null,
        options: [
          { value: null, text: 'Please select a sort by...' },
          { value: 'popularity', text: 'Popularity' },
          { value: 'title', text: 'Title' },
          { value: 'release_date', text: 'Date' },
          { value: 'vote_average', text: 'Rating' },
          { value: 'vote_count', text: 'Votes' },
        ],
        flag: true,
        sing: 1,
        sortUp: {
          date: (a, b) => Date.parse(a[this.selected]) > Date.parse(b[this.selected]) ? 1 : -1,
          number: (a, b) => a[this.selected] > b[this.selected] ? 1 : -1,
          string: (a, b) => a[this.selected].localeCompare(b[this.selected]),
        },
        sortDown: {
          date: (a, b) => Date.parse(a[this.selected]) < Date.parse(b[this.selected]) ? 1 : -1,
          number: (a, b) => a[this.selected] < b[this.selected] ? 1 : -1,
          string: (a, b) => b[this.selected].localeCompare(a[this.selected]),
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
            this.currentPage = response.page;
            this.totalPages = response.total_pages;
          });
      },
      onPageChange(page) {
        this.currentPage = page;
        this.getMoviesByPopular();
        this.selected = null;
        this.flag = true;
      },
      sortBy() {
        let sortWith;
        if (this.selected === 'release_date') {
          sortWith = 'date';
        } else {
          sortWith = typeof this.popularMovies[0][this.selected];
        }
        if (this.flag) {
          this.popularMovies.sort(this.sortDown[sortWith]);
        } else {
          this.popularMovies.sort(this.sortUp[sortWith]);
        }
      },
      sortOrder() {
        this.flag = !this.flag;
        this.sortBy();
      },
    }
  };
</script>

<style lang="scss">
  @import '../../assets/scss/variables.scss';

  .movies__title {
    padding-left: .5rem;
    font-size: 25px;
    text-align: left;
    font-weight: bold;
  }
  .movies__sort {
    padding: 0.55rem 0;
    font-size: 13px;
    background-color: $gray-200;
    border: 1px solid $gray-400;
    border-radius: 0.3rem;
    width: 5rem;
  }
  .movies__sort-btn {
    display: inline-flex;
    color: $virid;
    background-color: transparent;
    border: none;

    .md-arrow-icon {
      animation-play-state: paused;
    }
    &:hover .md-arrow-icon {
      animation-play-state: running;
    }
    &:focus {
      outline: none;
    }
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
