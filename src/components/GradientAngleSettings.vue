<template>
  <section>
    <h3>gradient angle</h3>
    <VueSlider v-model="angle" v-bind="sliderConfig" @drag-end="triggerChangeAngle" />
    <p>{{ getAngle }}°</p>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import Config from '@/config';
import VueSlider from 'vue-slider-component';
import Generator from '@/mixins/Generator';

export default {
  name: 'GradientAngleSettings',
  mixins: [Generator],
  data() {
    return {
      angle: 45,
      sliderConfig: {
        ...Config.rangeSlider,
        min: 0,
        max: 360,
      },
    };
  },
  components: {
    VueSlider,
  },
  methods: {
    ...mapActions(['changeAngle']),
    triggerChangeAngle() {
      this.changeAngle(this.angle);
      this.setGradient();
    },
  },
};
</script>
