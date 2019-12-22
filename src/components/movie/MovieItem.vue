<template>
  <div class="container-fluid movie-item d-flex flex-grow-1">
    <div v-if="isDataLoaded" class="d-flex flex-column flex-grow-1">
      <div class="row">
        <b-breadcrumb
          v-if="currentMovie.title" class="flex-grow-1 movie-item__breadcrumb"
          :items="[{text: 'Movies',to: '/movies'},{text: currentMovie.title, active: true}]"
        />
        <b-breadcrumb
          v-else class="flex-grow-1 movie-item__breadcrumb"
          :items="[{text: 'Movies',to: '/movies'},{text: currentMovie.original_title, active: true}]"
        />
      </div>
      <div class="row">
        <div class="col-sm-4 d-flex flex-column justify-content-start align-items-center align-items-sm-end">
          <b-img
            :src="`https://image.tmdb.org/t/p/w185_and_h278_bestv2${currentMovie.poster_path}`"
            class="movie-item__poster"
            alt="Poster"
            fluid
          />
          <div class="row no-gutters flex-column mt-4">
            <div class="col">
              <span v-if="currentMovie.vote_average" class="movie-item__stars-wrapper">
                <span v-if="currentMovie.vote_average === countStars" class="movie-item__stars-wrapper">
                  <md-star-icon v-for="(star, index) in countStars" :key="index" w="18.5px" h="18.5px" class="movie-item__stars-icon" />
                  <md-star-outline-icon v-for="(star, index) in 10 - countStars" :key="index + countStars" w="18.5px" h="18.5px" class="movie-item__stars-icon" />
                </span>
                <span v-else class="movie-item__stars-wrapper">
                  <md-star-icon v-for="(star, index) in countStars" :key="index" w="18.5px" h="18.5px" class="movie-item__stars-icon" />
                  <md-star-half-icon w="18.5px" h="18.5px" class="movie-item__stars-icon" />
                  <md-star-outline-icon v-for="(star, index) in 9 - countStars" :key="index + countStars" w="18.5px" h="18.5px" class="movie-item__stars-icon" />
                </span>
              </span>
              <span v-else class="movie-item__stars-wrapper">
                <md-star-outline-icon v-for="(star, index) in 10 - countStars" :key="index" w="18.5px" h="18.5px" class="movie-item__stars-icon" />
              </span>
            </div>
            <div
              class="movie-item__rating col d-flex justify-content-center justify-content-sm-end"
              :style="currentMovie.vote_average < 5 ? 'color: red' : currentMovie.vote_average > 7 ? 'color: green' : null"
            >
              <h3>{{ currentMovie.vote_average }}</h3>
              <h6>{{ currentMovie.vote_count }}</h6>
            </div>
          </div>
        </div>
        <div class="col d-flex flex-column">
          <h2 v-if="currentMovie.title" class="text-danger align-self-sm-start movie-item__title">{{ currentMovie.title }}</h2>
          <h2 v-else class="text-danger align-self-sm-start movie-item__title">{{ currentMovie.original_title }}</h2>
          <h3 class="align-self-sm-start movie-item__original_title mb-3">{{ currentMovie.original_title }}</h3>
          <b-table
            :items="sortDataTable"
            thead-class="d-none"
            class="movie-item__table text-left"
            small
            hover
          />
        </div>
      </div>
      <div v-if="similarMovies.length" class="row justify-content-around mx-0">
        <Movie
          v-for="movie in countFilms"
          :key="movie.id"
          :movie="movie"
          :width="width"
          :style="`max-width:${width.max + 'rem'}; min-width:${width.min  + 'rem'}`"
        />
      </div>
    </div>
    <div v-else class="d-flex justify-content-center align-items-center flex-grow-1">
      <Spinner />
    </div>
  </div>
</template>

<script>
  import { axios, getMovieByID, getSimilarMovies } from  '../../api';
  import Movie from  '../movies/Movie';
  import Spinner from  '../spinner/Spinner';

  export default {
    name: "MovieItem",
    props: {
      pageId: {
        type: [Number, String],
        required: true,
      },
    },
    components: {
      Movie,
      Spinner
    },
    data() {
      return {
        currentMovie: null,
        similarMovies: [],
        isDataLoaded: false,
        width: {
          max: '8rem',
          min: '6rem'
        },
        breadcrumb: [
          {
            text: 'Movies',
            to: '/movies'
          },
          {
            text: 'Movie',
            active: true
          }
        ],
        contentWidth: document.documentElement.clientWidth,
        countFilms: null,
      };
    },
    created() {
      this.getAllMovieInfo();
      window.onresize = () => this.handleResize();
    },
    beforeUpdate() {
      this.getAllMovieInfo();
      this.countFilms = this.similarMovies.slice(0, Math.floor(this.contentWidth/120));
    },
    destroyed() {
      window.onresize = null;
    },
    computed: {
      countStars() {
        return  Math.floor(this.currentMovie.vote_average);
      },
    },
    methods: {
      getAllMovieInfo() {
        axios.all([getMovieByID(this.pageId), getSimilarMovies(this.pageId)])
          .then(axios.spread((movieById, similarMovies) => {
            this.currentMovie = movieById.data;
            this.similarMovies = similarMovies.data.results;
            this.isDataLoaded = true;
          }));
      },
      handleResize() {
        this.contentWidth = document.documentElement.clientWidth;
      },
      changeTypeData(data) {
        const arrData = [];
        for (let key in data) {
          const temp = {};
          temp.icon = '📹';
          temp.name = key;
          temp.value = data[key];
          arrData.push(temp)
        }
        return arrData;
      },
      sortDataTable() {
        const tableData = [];
        this.changeTypeData(this.currentMovie).forEach(item => {
          switch (item.name) {
            case 'release_date':
              item.id = 1;
              item.name = 'release';
              item.value = item.value.split('-').reverse().join('.');
              tableData.push(item);
              break;
            case 'production_countries':
              item.id = 2;
              item.name = 'countries';
              item.value = item.value.map(obj => obj.name).join(', ');
              tableData.push(item);
              break;
            case 'genres':
              item.id = 3;
              item.value = item.value.map(obj => obj.name).join(', ');
              tableData.push(item);
              break;
            case 'production_companies':
              item.id = 4;
              item.name = 'companies';
              item.value = item.value.map(obj => obj.name).join(', ');
              tableData.push(item);
              break;
            case 'tagline':
              item.id = 5;
              item.name = 'slogan';
              tableData.push(item);
              break;
            case 'overview':
              item.id = 6;
              tableData.push(item);
              break;
            case 'status':
              item.id = 7;
              tableData.push(item);
              break;
            case 'budget':
              item.id = 8;
              item.value += ' $';
              tableData.push(item);
              break;
            case 'revenue':
              item.id = 9;
              item.value += ' $';
              tableData.push(item);
              break;
            case 'runtime':
              item.id = 10;
              item.value += ' min';
              tableData.push(item);
              break;
          }
        });
        tableData.sort((a, b) => a.id - b.id);
        // if (!tableData.length) tempArr = [...Array(10).keys()].map(item => ({id: item + 1}));
        return tableData;
      }
    }
  };
</script>

<style lang="scss">
  @import '../../assets/scss/variables.scss';

  .movie-item__breadcrumb {
    font-weight: bold;
    background-color: lighten($virid, 50%);
  }
  .movie-item__stars-wrapper {
    display: inline-flex;
  }
  .movie-item__stars-icon {
    color: orange;
  }
  .movie-item__rating {
    h3 {
      font-size: 2rem;
    }
    h6 {
      text-decoration: underline;
      font-size: 0.9rem;
      margin-left: 7px;
      margin-top: 3px;
    }
  }
  .movie-item__title {
    font-size: 1.8rem;
  }
  .movie-item__original_title {
    font-size: 1rem;
  }
  .movie-item__table {
    font-size: 0.9rem;

    tbody tr:nth-child(2n) {
      background-color: $gray-100;
    }
    tbody tr:nth-child(2n-1) {
      background-color: lighten($virid, 55%);
    }
    tbody tr:nth-child(2n):hover {
      background-color: lighten($virid, 50%);
    }
    tbody tr:nth-child(2n-1):hover {
      background-color: $gray-200;
    }
    td:first-child {
      font-size: 0.6rem;
      vertical-align: middle;
    }
    td:nth-child(2) {
      color: darkorange;
    }
    td:last-child {
      display: none;
    }
  }
</style>
