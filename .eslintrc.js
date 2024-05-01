module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parser: '@babel/eslint-parser', // add essa linha
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/prefer-stateless-function': 'off',
    'no-console': 'off',
    'react/state-in-constructor': 'off',
    'react/no-unused-state': 'off',
    'import/no-duplicates': 'off',
    'class-methods-use-this': 'off',
    'react/jsx-indent-props': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/forbid-prop-types': 'off'
  },
};
