module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'airbnb-typescript', 'prettier', 'eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // ecmaVersion: 'latest',
    // sourceType: 'module',
    // project: 'tsconfig.json',
    // tsconfigRootDir: __dirname,
  },
  rules: {},
};
