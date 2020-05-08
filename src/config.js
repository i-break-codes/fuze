module.exports = {
  rangeSlider: {
    tooltip: 'active',
    dotSize: 24,
    lazy: true,
    dotStyle: {
      border: 0,
    },
    railStyle: {
      backgroundImage: 'linear-gradient(45deg, #612E8D, #C22286, #EA225E)',
    },
    processStyle: {
      backgroundColor: 'rgba(255, 255, 255, .3)',
    },
    height: 8,
  },
  colorPicker: {
    el: '.pickr',
    theme: 'nano',
    position: 'bottom',
    default: '#d42274',
    autoReposition: false,
    components: {
      preview: true,
      opacity: true,
      hue: true,
      interaction: {
        hex: true,
        rgba: true,
        input: true,
        clear: false,
        save: true,
      },
    },
  },
  presets: [
    ['#22D45A', '#2247D4'],
    ['#D42222', '#22D46C'],
    ['#D422B1', '#FFCE00'],
    ['#FF7F00', '#FFF100'],
    ['#2455EB', '#24DDEB', '#59EB24'],
  ],
};
