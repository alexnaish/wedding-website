<template>
  <div class="section container">
    <Heading text="Place and Time / Részletek" />
    <div class="venues">
      <div class="venues__location">
        <Heading text="England / Anglia" />
      </div>
      <div class="venues__location">
        <Heading text="Hungary / Magyarország" />
      </div>
    </div>
  </div>
</template>

<script>
import Heading from '@/components/Heading.vue'

export default {
  name: 'VenueSection',
  components: {
    Heading
  }
}
</script>

<style scoped lang="scss">
  
  .venues {
    display: flex;
    flex-wrap: wrap;

    &__location {
      flex-grow: 1;
      flex-basis: 50%;
      min-width: 400px;
    }
  }

</style>
