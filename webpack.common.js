module.exports = {
  entry: {
    main: "./src/index.tsx",
  },
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
};
