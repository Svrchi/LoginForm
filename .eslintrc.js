module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest": true,
  },
  extends: ['eslint:recommended', 'prettier', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': "off",
  }
}
