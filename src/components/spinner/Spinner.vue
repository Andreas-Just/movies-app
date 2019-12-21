<template>
  <div class="animation animation-5">
    <h3>Loading...</h3>
    <div class="lds-ellipsis">
      <div class="child"></div>
      <div class="child"></div>
      <div class="child"></div>
      <div class="child"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Spinner',
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/variables.scss';

  .animation {
    color: $virid;
  }
  .animation-5 .lds-ellipsis {
    display: inline-flex;
    position: relative;
    top: -10px;
    width: 80px;
  }
  .animation-5 .child {
    position: absolute;
    top: 75%;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: $virid;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .animation-5 .child:nth-child(1) {
    left: 6px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .animation-5 .child:nth-child(2) {
    left: 6px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .animation-5 .child:nth-child(3) {
    left: 26px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .animation-5 .child:nth-child(4) {
    left: 45px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(19px, 0);
    }
  }
</style>
