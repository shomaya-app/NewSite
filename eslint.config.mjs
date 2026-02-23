// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import eslintConfigPrettier from 'eslint-config-prettier'

export default withNuxt([
  {
    files: ['**/*.vue', '**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.eslint.json',
      }
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'error',
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'any',
          }
        }
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          caughtErrorsIgnorePattern: '^_',
        }
      ],
      'vue/component-api-style': ['error', ['script-setup']],
      'vue/enforce-style-attribute': ['error', { 'allow': ['scoped'] }]
    }
  },
  eslintConfigPrettier
])