module.exports = {
  parser: 'babel-eslint',
  env: {
    node: true,
    es6: true,
    commonjs: true,
  },
  extends: "standard",
  globals: {
    __DEV__: true,
  },
  parserOptions: {
    ecmaVersion: 2018, // ES9。
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
      webpack: {
        config: './build/webpack.base.js',
      },
    },
  },
  rules: {
  },
};
