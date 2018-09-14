<template>
  <router-link class="button" v-bind:class="{ [`button--${theme}`]: !!theme}" :to="path">{{text}}</router-link>
</template>

<script>
export default {
  name: 'Button',
  props: ['path', 'text', 'theme']
}
</script>

<style lang="scss">
  .button {
    display: block;
    margin: 30px auto 10px;
    max-width: 200px;
    padding: 20px;
    border: 1px solid lightgrey;
    background: #ebc064;
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-family: 'Dancing Script', cursive;
    font-size: 24px;
    letter-spacing: 5px;
    text-shadow: rgba(0, 0, 0, 0.3) 1px 1px 2px;
    transition: background 0.25s ease;

    &:hover {
      background: darken(#ebc064, 10);
    }
  }
</style>

