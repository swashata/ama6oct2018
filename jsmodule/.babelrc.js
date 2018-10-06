module.exports = api => {
  api.cache(false);
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            node: "8.6"
          },
          modules: 'commonjs',
        }
      ]
    ]
  };
};
