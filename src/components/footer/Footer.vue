<template>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-sm-2 footer">
      <div class="col-12">
        <p>&copy; Andreas Just. All Rights Reserved.</p>
        <p>Film data provided by TMDb</p>
      </div>
      <div class="col-12 footer__logo-wrapper">
        <logo-github-icon w="40px" h="40px" animate="shake" class="footer__logo-github" />
        <logo-linkedin-icon w="40px" h="40px" animate="shake" class="footer__logo-linkedin" />
        <logo-skype-icon w="40px" h="40px" animate="shake" class="footer__logo-skype" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
  }
</script>

<style lang="scss">
  @import '../../assets/scss/variables.scss';

  .footer {
    justify-content: space-between;
    margin-top: 30px;
    padding: 15px 20px 10px;
    background-color: $gray-300;
    p {
      margin: 0;
      font-size: 0.9rem;
      text-align: left;
    }
  }
  .footer__logo-wrapper {
    text-align: right;
  }
  .footer__logo-github,
  .footer__logo-linkedin,
  .footer__logo-skype {
    margin-left: 3.5vw;
    animation-play-state: paused;
    transition: all 300ms linear;

    &:hover {
      color: $virid;
      box-shadow: inset 0 50px 20px $bg-black;
      animation-play-state: running;
      animation-iteration-count: 1;
    }
  }
  @media (max-width: 576px) {
    .footer {
      padding: 15px 10px 5px;

      p {
        font-size: 0.7rem;
        text-align: center;
      }
      .footer__logo-wrapper {
        margin-top: 10px;
        text-align: center;
      }
      .footer__logo-github,
      .footer__logo-linkedin,
      .footer__logo-skype {
        margin: 0 2.5vw;
      }
    }
  }
</style>
