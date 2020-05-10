<template>
  <div :class="{ 'fadeOutRight': !advancedSettings, 'fadeInRight': advancedSettings }">
    <DynamicSlider :min="0" :max="360" element="angle"/>
    <DynamicSlider :min="1" :max="40" element="speed"/>
    <a href="#" @click.prevent="toggleAdvancedSettings">go back</a>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import DynamicSlider from '@/components/DynamicSlider';

export default {
  name: 'AdvancedSettings',
  components: {
    DynamicSlider,
  },
  computed: {
    ...mapState('Settings', ['advancedSettings']),
  },
  methods: {
    ...mapActions('Settings', ['toggleAdvancedSettings']),
  },
};
</script>

<style lang="scss" scoped>
div {
  width: 300px;
  z-index: 1;
  position: absolute;
  top: 190px;

  section {
    padding: 0 30px;
    margin-bottom: 80px;
  }
}

a {
  color: var(--pink);
  transition: color 250ms ease-in;
  font-size: 24px;
  letter-spacing: 1px;
  position: absolute;
  bottom: 35s px;
  transform: translateX(-50%);
  left: 50%;
  white-space: nowrap;

  &:hover {
    color: var(--white);
  }
}

::v-deep {
  h3 {
    font-size: 24px;
    letter-spacing: 1px;
    text-align: center;
    margin-bottom: 20px;
  }

  p {
    padding: 20px 0;
    text-align: center;
  }
}
</style>
