module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      configFile: './.babelrc',
    },
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
