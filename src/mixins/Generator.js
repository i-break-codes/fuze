import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['allPalettes', 'getAngle', 'getSpeed']),
    paletteCount() {
      return this.allPalettes.length;
    },
  },
  methods: {
    configureGradient() {
      const constructBackground = (this.paletteCount > 1 ? `linear-gradient(${this.getAngle ? this.getAngle : 45}deg, ${this.allPalettes.join(', ')})` : this.allPalettes[0] || 'linear-gradient(-45deg, #EA225E, #C22286, #612E8D)');
      const backgroundSize = this.paletteCount ? this.paletteCount * 200 : 200;
      const constructCode = `
        body {
          background: ${constructBackground};
          background-size: ${backgroundSize}% ${backgroundSize}%;
          animation: GradientBackground ${this.getSpeed ? this.getSpeed : 10}s ease infinite;
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
