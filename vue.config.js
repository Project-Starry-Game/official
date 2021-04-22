module.exports = {
  transpileDependencies: ["vuetify"],

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: ["/", "/about", "/contact", "/games", "/sob"],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
    },
  },
};
