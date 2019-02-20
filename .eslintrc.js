module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parser": "babel-eslint",
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "indent": ["error", "tab"],
    "quotes": ["error", "single"],
    'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],
    "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }]
  },
};
