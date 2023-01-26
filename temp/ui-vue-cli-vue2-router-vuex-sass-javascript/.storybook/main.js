const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
  ],
  framework: "@storybook/vue",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  staticDirs: ["../public"],
  webpackFinal: async (config, { configType }) => {
    // Allow the use of Vue src alias in components.
    config.resolve.alias["@"] = path.resolve(__dirname, "../src");
    // sass-loaderを設定
    // https://qiita.com/wakana_t_miri/items/d1d13afbf3713346e8f0
    config.module.rules.push({
      test: /\.sass$/,
      exclude: /node_modules/,
      use: ["style-loader", "css-loader", "sass-loader"],
    });

    return config;
  },
};
