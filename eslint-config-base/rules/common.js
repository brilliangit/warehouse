module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    'comma-dangle': ['error', 'never'],

    indent: 'off',
    'indent-legacy': [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],

    'max-len': [
      'error',
      {
        code: 110,
        ignoreComments: true,
      },
    ],

    'implicit-arrow-linebreak:': 'off',

    complexity: ['error', 4],

    'max-params': ['error', 4],

    'max-lines-per-function': [
      'error',
      {
        max: 15,
        skipComments: true,
        skipBlankLines: true,
      },
    ],
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.0',
    },
    propWrapperFunctions: [
      'forbidExtraProps', // https://www.npmjs.com/package/airbnb-prop-types
      'exact', // https://www.npmjs.com/package/prop-types-exact
      'Object.freeze', // https://tc39.github.io/ecma262/#sec-object.freeze
    ],
  },
};
