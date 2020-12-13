module.exports = {
  extends: ['plugin:prettier/recommended', 'eslint-config-react-app'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    quotes: [2, 'single'],
    'no-use-before-define': ['error', { variables: false }],
  },
};
