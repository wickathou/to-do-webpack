module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testRegex: 'src/tests/.*\\.test\\.js$',
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
};
