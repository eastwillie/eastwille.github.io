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
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-alert': 'off',
    indent: ['error', 2],
    'vue/html-indent': ['error', 2],
    'prefer-destructuring': ['error', { object: true, array: false }],
    'linebreak-style': 0,
    'import/prefer-default-export': 'off'
  },
};
