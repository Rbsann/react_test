// eslint-disable-next-line no-undef
module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts(x)"],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
};
