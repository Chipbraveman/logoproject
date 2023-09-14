import('next').NextConfig
const webpack = require("webpack");

const nextConfig = {
  reactStrictMode: true,
};

// module.exports = nextConfig;

const path = require("path");

module.exports = {
  nextConfig,

  sassOptions: {
    includePaths: [path.join("styles/scss/global.scss", "styles")],
  },
  
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   config.plugins.push(
  //     new webpack.ProvidePlugin({
  //       $: "jquery",
  //       jQuery: "jquery",
  //       "window.jQuery": "jquery",
  //     })
  //   );
  // },
};
