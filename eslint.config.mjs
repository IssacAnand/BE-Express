import globals from 'globals'
import { defineConfig } from 'eslint/config'
import js from '@eslint/js'
import stylisticJs from '@stylistic/eslint-plugin-js'


/*
ESLint is a code checker that helps you write cleaner,
 more consistent, and error-free JavaScript

*/
export default defineConfig([
  js.configs.recommended, // ensures ESLint's recommended settings are applied first before our own custom options.
  // look at all js files in folder
  { files: ['**/*.js'],
    languageOptions: { sourceType: 'commonjs' } },

  { files: ['**/*.{js,mjs,cjs}'],
    languageOptions: { globals: globals.browser },
    /* extend ESlint functionality by adding custom features
      not available in core ESLint Lib
     */
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    rules: {
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/linebreak-style': ['error', 'unix'],
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/semi': ['error', 'never'],
      eqeqeq: 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'arrow-spacing': ['error', { before: true, after: true }],
      'no-console': 'off',
    },
  },

  { // doesnt check the FE code
    ignores: ['dist/**'],
  }

])
