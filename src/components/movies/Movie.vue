<template>
  <div class="col movie">
    <b-card
      no-body
      :id="movie.id"
      :img-src="`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`"
      :img-alt="movie.title"
      img-center
      tag="article"
      class="my-3 card"
      v-click-outside="hide" @click="toggle"
    >
      <b-button
        :to="`/movies/${movie.id}`"
        :style="`${width.max > 10 ? 'font-size: 14px' : 'font-size: 10px'}`"
        class="movie__btn"
        squared
        block
      >
        View more
      </b-button>
    </b-card>
    <b-popover :target="`${movie.id}`" triggers="click" placement="left" offset="15" :show.sync="opened">
      <template v-slot:title>{{ movie.title }}</template>
      Movie rating
      <span v-if="rating" class="movie__stars-wrapper">
        <md-star-icon v-for="(star, index) in countStars()" :key="index" w="16px" h="16px" class="movie__stars-icon" />
        <md-star-outline-icon v-for="(star, index) in 5 - countStars()" :key="index + countStars()" w="16px" h="16px" class="movie__stars-icon" />
      </span>
      <span v-else-if="!rating" class="movie__stars-wrapper">
        <md-star-outline-icon v-for="(star, index) in 5" :key="index" w="16px" h="16px" class="movie__stars-icon" />
      </span>
      <b>{{ rating }}</b>
    </b-popover>
  </div>
</template>

<script>
  import ClickOutside from 'vue-click-outside';


  export default {
    name: 'Movie',
    props: {
      movie: {
        type: Object,
        required: true
      },
      width: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        opened: false,
        rating: this.movie.vote_average,
      }
    },
    methods: {
      toggle() {
        this.opened = true
      },

      hide() {
        this.opened = false
      },
      countStars() {
        return  Math.floor(this.rating / 2);
      },
    },
    mounted() {
      // prevent click outside event with popupItem.
      this.popupItem = this.$el
    },
    directives: {
      ClickOutside
    }
  };
</script>

<style lang="scss">
  @import '../../assets/scss/variables.scss';

  .movie {
    padding: 0 10px;
  }

  .movie__btn {
    text-transform: uppercase;
    transition: all 300ms linear;
    font-weight: bold;
    color: $bg-black;
    background-color: $virid;
    border: none;

    &:hover,
    &:focus,
    &:not(:disabled):not(.disabled):active,
    &:not(:disabled):not(.disabled):active:focus {
      color: $gray-100;
      box-shadow: inset 0 50px 20px $bg-black;
    }
  }
  .popover {
    background-color: lighten($virid, 50%);

    .arrow::after {
      border-left-color: $bg-black;
      border-right-color: $bg-black;
    }
    .popover-header {
      color: $gray-100;
      background-color: $bg-black;
    }
    .popover-body {
      display: inline-flex;
      align-items: center;
      font-weight: 600;
    }
    b {
      color: crimson;
    }
  }
  .movie__stars-wrapper {
    display: inline-flex;
    align-items: center;
    margin: 0 5px;
  }
  .movie__stars-icon {
    color: orange;
  }
</style>
