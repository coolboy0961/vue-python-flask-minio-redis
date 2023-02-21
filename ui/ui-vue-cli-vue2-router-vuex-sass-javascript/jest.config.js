require("./load-env");
module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transformIgnorePatterns: ["/node_modules/(?!axios|vuetify)"],
  setupFiles: ["<rootDir>/tests/setup.js"],
  testResultsProcessor: "jest-sonar-reporter",
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx,vue}",
    "!<rootDir>/node_modules/",
  ],
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/node_modules/jest-css-modules",
  },
};
