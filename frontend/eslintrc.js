module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true
  },
  extends: '@react-native-community',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react-native/no-inline-styles': 0,
    'prettier/prettier': [
      'error',
      {
        'no-inline-styles': false
      }
    ]
  }
}
