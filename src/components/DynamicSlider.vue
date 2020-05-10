<template>
  <section>
    <h3>speed</h3>
    <VueSlider v-model="slider" v-bind="sliderConfig"
               @drag-end="triggerChange" @click.native="triggerChange"/>
    <p>{{ slider }}s</p>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import Config from '@/config';
import VueSlider from 'vue-slider-component';
import Generator from '@/mixins/Generator';

export default {
  name: 'DynamicSlider',
  mixins: [Generator],
  components: {
    VueSlider,
  },
  data() {
    return {
      slider: undefined,
    };
  },
  props: {
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
    element: {
      type: String,
      required: true,
    },
  },
  computed: {
    sliderConfig() {
      return { ...Config.rangeSlider, min: this.min, max: this.max };
    },
  },
  created() {
    this.slider = this.$store.state.Settings[this.element];
  },
  methods: {
    ...mapActions('Settings', ['changeSetting']),
    triggerChange() {
      this.changeSetting({ setting: this.element, value: this.slider });
      this.setGradient();
    },
  },
};
</script>
