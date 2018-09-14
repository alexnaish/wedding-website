<template>
  <div class="home">
    <Splash />
    <Section heading="RSVP" intro="We would love you to be there, please let us know as soon as possible! Szeretnénk, ha ott vagy, tudassa velünk a lehető leghamarabb!">
      <Button text="RSVP" path="/rsvp" />
    </Section>
    <Section heading="Time &amp; Place / Részletek" intro="Something about two countries, two people, two celebrations. #SaraTheCopyWriter">
    </Section>
  </div>
</template>

<script>
import Splash from '@/components/Splash.vue';
import Section from '@/components/Section.vue';
import Button from '@/components/Button.vue';

export default {
  name: 'home',
  components: {
    Splash,
    Section,
		Button
  }
}
</script>
