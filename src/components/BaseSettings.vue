<template>
  <div :class="{ 'fadeOutLeft': advancedSettings, 'fadeInLeft': !advancedSettings }">
    <ChoosePalette />
    <SelectedPalette />
    <a href="#" @click.prevent="toggleAdvancedSettings">advanced settings</a>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import ChoosePalette from '@/components/ChoosePalettes';
import SelectedPalette from '@/components/SelectedPalette';

export default {
  components: {
    ChoosePalette,
    SelectedPalette,
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
a {
  color: var(--pink);
  transition: color 250ms ease-in;
  font-size: 24px;
  letter-spacing: 1px;
  position: absolute;
  bottom: 35px;
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
  }
}
</style>
