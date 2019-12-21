<template>
  <div v-if="popularMovies.length" class="col-12">
    <div class="row justify-content-around">
      <Movie v-for="movie in popularMovies" :key="movie.id" :movie="movie" class="movies__card" />
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
          class="movies__pagination"
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
          })
      },
      onPageChange(page) {
        this.currentPage = page;
        this.getMoviesByPopular();
      }
    }
  };
</script>

<style lang="scss">
  @import '../../assets/scss/variables.scss';

  .movies__card {
    max-width: 14em;
    min-width: 12em;
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
