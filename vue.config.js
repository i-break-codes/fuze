module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');

    config
      .plugin('html')
      .tap((args) => {
        const p = args;
        p[0].title = 'CSS Gradient Animator | Fuze';
        return p;
      });
  },
  publicPath: '/',
};
