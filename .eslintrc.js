module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'max-len': 0,
    'max-warnings': process.env.NODE_ENV === 'production' ? 0 : -1,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-alert': 'off',
    indent: ['error', 2],
    'vue/html-indent': ['error', 2],
    'prefer-destructuring': ['error', { object: true, array: false }],
    'linebreak-style': 0,
  },
};
