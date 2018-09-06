<template>
  <div class="home">
    <Splash />
    <RsvpSection />
    <VenueSection />
  </div>
</template>

<script>
import Splash from '@/components/Splash.vue'
import RsvpSection from '@/components/RsvpSection.vue'
import VenueSection from '@/components/VenueSection.vue'

export default {
  name: 'home',
  components: {
    Splash,
    RsvpSection,
    VenueSection
  }
}
</script>
