module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  testRegex: 'src/tests/.*\\.test\\.js$',
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  setupFiles: ["<rootDir>/jest.setup.js"]
};