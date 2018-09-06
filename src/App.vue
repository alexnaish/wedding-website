<template>
  <div id="app">
    <Navigation />
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src

import Navigation from '@/components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style lang="scss">

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }

  #app {
    position: relative;
    font-family: 'Montserrat', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    text-align: center;
    color: #2c3e50;
  }

  .container {
    max-width: 1440px;
    margin: 0 auto;
  }

</style>
