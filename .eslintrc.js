module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.ENV === 'production' ? 'off' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
