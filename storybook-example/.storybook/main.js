const path = require("path");
const root = path.resolve(__dirname, "..");
const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");

module.exports = {
  // typescript: {
  //   check: false,
  //   checkOptions: {},
  //   reactDocgen: "react-docgen-typescript",
  //   reactDocgenTypescriptOptions: {
  //     shouldExtractLiteralValuesFromEnum: true,
  //     propFilter: (prop) =>
  //       prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
  //   },
  // },
  // typescript: {
  //   reactDocgen: "react-docgen-typescript",
  //   reactDocgenTypescriptOptions: {
  //     compilerOptions: {
  //       allowSyntheticDefaultImports: false,
  //       esModuleInterop: false,
  //     },
  //   },
  // },
  webpackFinal: async (config, { configType }) => {
    // config.resolve.plugins = [
    //   new TsconfigPathsPlugin({ extensions: config.resolve.extensions }),
    // ];
    // config.resolve.extensions.push(".ts", ".tsx");
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need

    config.resolve.alias["react-native$"] = "react-native-web";
    // config.resolve.alias["native-base"] = path.resolve("../src");
    config.resolve.alias["my-com-lib"] = path.resolve("../src");
    // webpackConfig.module.rules[6].oneOf[1].include.push(path.resolve(__dirname, "../package"))

    config.module.rules.push({
      test: /\.(js|ts|tsx)$/,
      include: path.resolve(root, "src"),
      use: ["babel-loader"],
      exclude: /node_modules/,
    });

    config.module.rules.push({
      test: /\.ttf$/,
      loader: "url-loader", // or directly file-loader
      include: path.resolve(
        __dirname,
        "node_modules/react-native-vector-icons"
      ),
    });

    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      include: path.resolve(root, "../src"),
      use: ["babel-loader"],
      exclude: /node_modules/,
    });
    // // config.module.rules.push({
    //   test: /\.tsx?$/,
    //   use: "ts-loader",
    // });
    // typescript: {
    //   check: false,
    //   checkOptions: {},
    //   reactDocgen: 'react-docgen-typescript',
    //   reactDocgenTypescriptOptions: {
    //     shouldExtractLiteralValuesFromEnum: true,
    //     propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    //   },
    // },
    config.resolve.alias["@expo/vector-icons"] =
      "react-native-vector-icons/dist";
    // Return the altered config
    return config;
  },
  stories: [
    "../src/storybook/stories/**/**/**/*.stories.mdx",
    "../src/storybook/stories/**/**/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    "@storybook/addon-knobs",
    "@storybook/addon-docs",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
