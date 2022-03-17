module.exports = {
  testEnvironment: "jest-environment-jsdom",
  moduleDirectories: ["node_modules", __dirname],
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"]
  }
};
