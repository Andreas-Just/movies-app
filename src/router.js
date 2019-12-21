import Vue from 'vue';
import Router from 'vue-router';
import Movies from './components/movies/Movies';
import MovieItem from './components/movie/MovieItem';

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/movies"
    },
    {
      path: "/movies",
      name: "Movies",
      component: Movies
    },
    {
      path: "/movies/:id",
      name: "Movie",
      props: route => ({ pageId: route.params.id }),
      component: MovieItem
    },
    {
      path: "*",
      redirect: "/movies"
    }
  ]
});

export default router;
