module.exports = function override(config, env) {
  //do stuff with the webpack config...
  console.log("override");
  let loaders = config.resolve;
  loaders.fallback = {
    buffer: false,
  };
  return config;
};
