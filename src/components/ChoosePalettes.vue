<template>
  <section class="choose-palettes-section">
    <h3>add palette</h3>
    <div class="pickr">
      <button type="button" class="pcr-button"></button>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import Pickr from '@simonwep/pickr';
import Config from '@/config';
import Generator from '@/mixins/Generator';

export default {
  name: 'ChoosePalettes',
  mixins: [Generator],
  mounted() {
    this.pickr = Pickr.create(Config.colorPicker);
    this.pickr.on('save', (color, instance) => {
      this.showNotification({
        show: true,
        message: 'Color Added',
      });
      this.addPalette(color, instance);
      this.setGradient();
    });
  },
  methods: {
    ...mapActions('Palette', ['addPalette', 'showNotification']),
    ...mapActions('Notification', ['showNotification']),
  },
};
</script>
