import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('Palette', ['palettes']),
    ...mapState('Settings', ['angle', 'speed']),
    paletteCount() {
      return this.palettes.length;
    },
  },
  mounted() {
    if (this.palettes.length > 0) {
      this.setGradient();
    }
  },
  methods: {
    configureGradient() {
      const constructBackground = (this.paletteCount > 1 ? `linear-gradient(${this.angle ? this.angle : 45}deg, ${this.palettes.join(', ')})` : this.palettes[0] || 'linear-gradient(-45deg, #EA225E, #C22286, #612E8D)');
      const backgroundSize = this.paletteCount ? this.paletteCount * 200 : 200;
      const constructCode = `
        body {
          background: ${constructBackground};
          background-size: ${backgroundSize}% ${backgroundSize}%;
          animation: GradientBackground ${this.speed ? this.speed : 10}s ease infinite;
        }

        @keyframes GradientBackground {
          0% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 50%;
          }

          100% {
            background-position: 0% 50%;
          }
        };
      `;

      return constructCode;
    },
    setGradient() {
      //* find and discard the previous style
      const findOldAppendedElm = document.querySelector('[data-new-gradient]');
      if (findOldAppendedElm) {
        findOldAppendedElm.remove();
      }

      this.addStyle = document.createElement('style');
      this.addStyle.appendChild(document.createTextNode(this.configureGradient()));
      this.addStyle.setAttribute('data-new-gradient', true);
      document.head.appendChild(this.addStyle);
    },
  },
};
