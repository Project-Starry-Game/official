const SitemapPlugin = require("sitemap-webpack-plugin").default;
const paths = ["/", "/about", "/contact", "/games", "/sob"];

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

  configureWebpack: () => {
    if (process.env.NODE_ENV !== "production") return;
    return {
      plugins: [
        new SitemapPlugin({
          base: "https://projectstarry.com",
          paths,
          options: {
            filename: "map.xml",
          },
        }),
      ],
    };
  },
};
