<template>
  <div class="divider" v-bind:class="{ [`divider--${theme}`]: !!theme, 'divider--narrow': !!narrow }"></div>
</template>

<script>
export default {
  name: 'Divider',
  props: ['theme', 'narrow']
}
</script>

<style lang="scss">
  .divider {
    position: relative;
    width: 800px;
    max-width: 80%;
    height: 1px;
    background-color: #fff;
    display: inline-block;
    margin-top: 30px;
    margin-bottom: 30px;
    position: relative;
    opacity: 0.5;

    &::after {
      content: "";
      position: absolute;
      width: 40%;
      height: 5px;
      transform: translate(-50%, -50%);
      background-color: #fff;
      display: inline-block;
    }

    &--narrow {
      width: 200px;
    }

    &--dark {
      background-color: #2c3e50;

      &::after {
        background-color: #2c3e50;
      }
    }

  }

</style>
