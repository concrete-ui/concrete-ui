const path = require("path");
const Solid = require("vite-plugin-solid");

module.exports = {
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/html",
  core: {
    builder: "@storybook/builder-vite",
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return {
      ...config,
      plugins: [Solid({ hot: false }), ...config.plugins],
      resolve: {
        alias: [
          {
            find: "@concrete-ui/solid",
            replacement: path.resolve(
              __dirname,
              "../../../packages/concrete-solid/"
            ),
          },
        ],
      },
    };
  },
};
