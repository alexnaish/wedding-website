<template>
  <div class="splash">
    <h1 class="splash__title">We're getting married!</h1>
    <Divider />
  </div>
</template>

<script>
// @ is an alias to /src

import Divider from '@/components/Divider.vue'

export default {
  name: 'Splash',
  components: {
    Divider
  }
}
</script>

<style scoped lang="scss">
  
  .splash {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 700px;
    margin: 0 auto;
    background: url(https://s3.eu-west-2.amazonaws.com/naish-wedding-assets/IMG-0359.jpg) no-repeat center 70%;
    background-size: cover;

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background-color: #ebc064;
      opacity: 0.1;
  }

    &::after {
      content: "";
      width: 100%;
      height: 240px;
      position: absolute;
      left: 0;
      bottom: 0;
      background-image: url(https://s3.eu-west-2.amazonaws.com/naish-wedding-assets/divider.png);
      background-repeat: repeat-x;
      background-position: top center;
      background-size: cover;
      z-index: 0;
    }

  }

  .splash__title {
    position: relative;
    font-family: 'Dancing Script', cursive;
    width: 80%;
    font-size: 8vw;
    font-weight: 400;
    text-align: center;
    margin: 0 auto;
    color: white;
    text-shadow: rgba(0, 0, 0, 0.3) 1px 1px 2px;
  }

  @media only screen and (min-width: 1921px) {
    .splash {
      background: url(https://s3.eu-west-2.amazonaws.com/naish-wedding-assets/blurred-background-close-up-flowers.jpg) no-repeat center 80%;
      &::before {
        opacity: 0.5;
      }
      &::after {
        background-position-y: center;
      }
    }
  }

  @media only screen and (max-width: 400px) {
    .splash {
      height: 450px;
    }

    .splash__title {
      font-size: 36px;
    }
  }

</style>
