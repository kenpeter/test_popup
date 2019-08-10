const { isEqual } = require("lodash");

module.exports = function override(config, env) {
  // Ensures react-pdf doesn't throw a warning
  const updatedRules = config.module.rules.filter(
    rule => !isEqual(rule, { parser: { requireEnsure: false } })
  );
  config.module.rules = updatedRules;

  // Ensure jest configuration works
  //config.collectCoverageFrom = [
  //  "src/components/**/*.{ts,tsx}",
  //  "!src/*.{ts, tsx}"
  //];
  
  return config;
}