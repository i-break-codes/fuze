<template>
  <section class="selected-palettes-section">
    <h3>selected palettes</h3>
    <ul v-if="palettes.length" v-click-outside="removeSelection">
      <li
          v-for="(palette, i) in palettes"
          :key="i++"
          :style="{ backgroundColor: palette }"
          @click.prevent="setActivePalette(i)"
      >
      <span class="remove" :class="{ 'hide': activePalette !== i }">
        <a href="#" @click.stop="remove(i)"><Remove/></a>
      </span>
      </li>
    </ul>
    <p v-else>none</p>
    <a v-if="palettes.length" href="#" @click.prevent="reset">clear all</a>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Remove from '@/assets/close.svg';
import Generator from '@/mixins/Generator';

export default {
  name: 'SelectedPalette',
  components: {
    Remove,
  },
  mixins: [Generator],
  data() {
    return {
      activePalette: 0,
    };
  },
  computed: {
    ...mapState('Palette', ['palettes']),
  },
  methods: {
    ...mapActions('Palette', ['clearAll', 'removePalette']),
    ...mapActions('Notification', ['showNotification']),
    removeSelection() {
      this.activePalette = 0;
    },
    setActivePalette(itemIdx) {
      this.activePalette = this.activePalette === itemIdx ? this.removeSelection() : itemIdx;
    },
    reset() {
      document.querySelector('[data-new-gradient]').remove();
      this.clearAll();
      this.removeSelection();
      this.showNotification({
        show: true,
        message: 'All Palettes Removed',
      });
    },
    remove(index) {
      this.removePalette(index - 1);
      this.setGradient();
      this.activePalette = 0;
      this.showNotification({
        show: true,
        message: 'Color Removed',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  section {
    border-top: 1px solid var(--white-10);
    border-bottom: 1px solid var(--white-10);
    padding: 40px 0;
    position: absolute;
    bottom: 100px;
    width: 100%;
  }

  a {
    display: block;
    text-align: center;
    margin-top: 10px;
    color: var(--pink);
    transition: color 250ms ease-in;

    &:hover {
      color: var(--white);
    }
  }

  ul {
    text-align: center;
    margin-top: 20px;
  }

  li {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    display: inline-block;
    margin: 10px;
    position: relative;
  }

  p {
    text-align: center;
    margin-top: 20px;
  }

  .remove {
    border: 3px solid var(--white);
    border-radius: 50%;
    position: absolute;
    height: 120%;
    width: 120%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;

    a {
      background-color: var(--black-80);
      border-radius: 50%;
      height: 18px;
      width: 18px;
      position: absolute;
      top: -20px;
      right: -10px;
      z-index: 1;
      pointer-events: all;
    }
  }
</style>
