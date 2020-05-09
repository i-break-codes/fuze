<template>
  <section>
    <h3>speed</h3>
    <VueSlider v-model="speed" v-bind="sliderConfig" @drag-end="triggerChangeSpeed" />
    <p>{{ speed }}s</p>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import Config from '@/config';
import VueSlider from 'vue-slider-component';
import Generator from '@/mixins/Generator';

export default {
  name: 'GradientAnimationSpeedSettings',
  mixins: [Generator],
  data() {
    return {
      speed: 10,
      sliderConfig: {
        ...Config.rangeSlider,
        min: 1,
        max: 40,
      },
    };
  },
  components: {
    VueSlider,
  },
  methods: {
    ...mapActions(['changeSpeed']),
    triggerChangeSpeed() {
      this.changeSpeed(this.speed);
      this.setGradient();
    },
  },
};
</script>
