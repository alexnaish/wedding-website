<template>
  <div class="heading">
    <div class="heading__title">{{ text }}</div>
    <Divider theme="dark" narrow="true"/>
  </div>
</template>

<script>
import Divider from '@/components/Divider.vue';

export default {
  name: 'Heading',
  props: ['text'],
  components: {
    Divider
  }
}
</script>

<style lang="scss">
  .heading {
    font-family: 'Dancing Script', cursive;
    font-size: 36px;
    text-align: center;
    margin: 0 auto;
  }

</style>
