module.exports = {
  css: {
    loaderOptions: {
      // sass: {
      //   data: `@import "./src/assets/scss/variables.scss";`
      // },
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/movie-app/dist/'
    : '/',
};
