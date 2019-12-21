<template>
  <div class="header container-fluid" id="header">
    <b-navbar toggleable="sm" type="dark" class="navigation" :sticky="true">
      <b-navbar-brand href="https://www.themoviedb.org/" target="_blank">
        <img src="../../assets/img/powered-by-the-movie-DB-green.svg" alt="logo" class="logo">
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="navigation__search ml-auto justify-content-end">
          <vue-bootstrap-typeahead
            class="my-2 my-sm-0 w-100 navigation__typeahead"
            v-model="query"
            :data="movies"
            :serializer="item => item.title"
            placeholder="Search for a movie..."
            @hit="chooseMovie"
            :maxMatches="20"
          >
            <!-- Append a button -->
            <template slot="append">
              <button
                class="navigation__typeahead-btn pr-1 pl-3 py-0"
                :disabled="!movies.length"
                @click="chooseMovie(movies[0])"
              >
                <md-search-icon w="40px" h="40px" animate="shake" class="md-search-icon" />
              </button>
            </template>
            <!-- Begin custom suggestion slot -->
            <template slot="suggestion" slot-scope="{ data, htmlText }">
              <div class="d-flex justify-content-start align-items-center text-left">
                <img
                  :src="`https://image.tmdb.org/t/p/w185_and_h278_bestv2${data.poster_path}`"
                  style="width: 40px; height: auto;"
                />
                <span class="ml-3" v-html="htmlText" />
                <strong class="ml-auto" v-html="`${data.release_date.split('-')[0]}`" />
              </div>
            </template>
          </vue-bootstrap-typeahead>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  import { getSearchMovies } from '../../api';
  import VueBootstrapTypeahead from 'vue-bootstrap-typeahead';
  import _ from 'lodash';

  export default {
    name: 'Header',
    components: {
      VueBootstrapTypeahead
    },
    data() {
      return {
        query: '',
        movies: [],
      }
    },
    methods: {
      searchMovies(newQuery) {
        getSearchMovies(newQuery)
          .then((res) => {
            this.movies = res.data.results;
          })
      },
      chooseMovie(movie) {
        this.query = '';
        this.movies = [];
        if (movie.id === this.$route.params.id) return;
        this.$router.push(`/movies/${movie.id}`);
      },
    },
    watch: {
      query: _.debounce(function(newQuery) { this.searchMovies(newQuery) }, 1000)
    },
  }
</script>

<style lang="scss">
  @import '../../assets/scss/variables.scss';

  #header {
    padding: 0;
  }
  .logo {
    width: 130px;
    height: auto;
  }
  .navigation {
    background-color: $bg-black;

    .navbar-toggler:focus {
      outline-color: $virid;
    }
  }
  .navigation__search {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    .list-group {
      padding-top: 0;
      max-height: 500px;
      &-item {
        padding: 0.3rem 0.7rem;
        background-color: lighten($virid, 50%);
      }
      &-item:hover {
        background-color: darken($virid, 27%);
        border-color: darken($virid, 30%);;
      }
    }
  }
  .navigation__typeahead {
    .input-group>.form-control {
      &:not(:last-child) {
        border-radius: 0.25rem;
      }
      &:focus {
        border-color: $virid;
        box-shadow: 0 0 0 0.1rem rgba($virid, 0.25);
      }
    }
  }
  .navigation__typeahead-btn {
    display: inline-flex;
    color: $virid;
    background-color: transparent;
    border: none;

    &:disabled {
      pointer-events: none;
      color: $gray-600;
    }

    .md-search-icon {
      animation-play-state: paused;
    }
    &:hover .md-search-icon {
      animation-play-state: running;
    }
    &:focus {
      outline: none;
    }
  }
  @media (min-width: 576px) {
    .navigation__search {
      width: 85%;
    }
  }
  @media (min-width: 768px) {
    .navigation__search {
      width: 70%;
    }
  }
  @media (min-width: 992px) {
    .navigation__search {
      width: 50%;
    }
  }
  @media (min-width: 1200px) {
    .navigation__search {
      width: 40%;
    }
  }
</style>
