const path = require("path");
// 載入 prerender-spa-plugin (第一步)
const PrerenderSPAPlugin = require("prerender-spa-plugin");
// 載入 PuppeteerRenderer (第二步)
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

const SitemapPlugin = require("sitemap-webpack-plugin").default;
const paths = ["/", "/about", "/contact", "/games", "/sob"];

module.exports = {
  transpileDependencies: ["vuetify"],

  configureWebpack: (config) => {
    if (process.env.NODE_ENV !== "production") return;
    config.plugins.push(
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, "dist"),
        routes: [
          "/",
          "/hr",
          "/tno",
          "/tno/about",
          "/tno/contact",
          "/tno/games",
          "/tno/incubation",
        ],
        minify: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          decodeEntities: true,
          keepClosingSlash: true,
          sortAttributes: true,
        },
        renderer: new Renderer({
          renderAfterDocumentEvent: "render-event",
          headless: false,
        }),
      }),
      new SitemapPlugin({
        base: "https://projectstarry.com",
        paths,
        options: {
          filename: "map.xml",
        },
      })
    );
  },
};
