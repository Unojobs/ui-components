const path = require("path");
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["@babel/preset-react", "@babel/preset-typescript"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            // For development, we want to alias the library to the source
            ["my-com-lib"]: path.join(__dirname, "..", "src/index"),
          },
        },
      ],
    ],
  };
};
