module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/es6',
    './rules/common',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    strict: 'error',
  },
};
