<template>
  <div id="app" class="app">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
  import Header from './components/header/Header';
  import Footer from './components/footer/Footer';

  export default {
    name: 'App',
    components: {
      Header,
      Footer
    }
  };
</script>

<style lang="scss">
  @import './assets/scss/index.scss';
  @import './assets/scss/variables.scss';

  html,
  body,
  .app {
    height: 100%;
  }

  .app {
    display: flex;
    flex-direction: column;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    > * {
      &:first-child,
      &:last-child {
        flex-shrink: 0;
      }
      &:nth-child(2) {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
      }

    }
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0;
    padding: 0;
  }

  a {
    color: $bg-black;
    &:hover {
      color: $virid;
      text-decoration: none;
    }
  }
</style>
