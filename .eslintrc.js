module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'max-len': [
      'error',
      {
        code: 130,
        ignoreUrls: true,
      },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    '@next/next/no-img-element': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'import/export': 'off',
  },
  overrides: [
    {
      files: ['**/*.stories.*'],
      rules: {
        'react/function-component-definition': 'off',
      },
    },
  ],
};
