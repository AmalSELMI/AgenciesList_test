module.exports = {
  rootDir: "../",
  automock: false,
  setupFiles: ["<rootDir>/jest/jest.setup.js"],
  collectCoverageFrom: ["<rootDir>/src/pages/**/*.{js,jsx}"],
  coverageThreshold: {
    global: {
      branches: 68,
      functions: 77,
      lines: 81,
      statements: 81,
    },
  },
  testPathIgnorePatterns: ["node_modules/"],
  moduleFileExtensions: ["js", "json"],
  testRegex: "\\.test\\.js$",
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  moduleNameMapper: {
    "~src/(.*)": "<rootDir>/src/$1",
  },
};
