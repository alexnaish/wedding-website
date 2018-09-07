<template>
  <div class="section container">
    <Heading :text="heading" />
    <div v:if="intro" class="section__intro">
      {{ intro }}
    </div>
    <slot></slot>
  </div>
</template>

<script>
import Heading from '@/components/Heading.vue'

export default {
  name: 'Section',
  components: {
    Heading
  }
}
</script>

<style lang="scss">

  .section {
    padding: 20px;

    &__intro {
      line-height: 1.4;
    }
  }

</style>
