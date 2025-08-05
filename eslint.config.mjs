import eslint from '@eslint/js';
import tsEslintPlugin from '@typescript-eslint/eslint-plugin';
import tsEslintParser from '@typescript-eslint/parser';
import nextPlugin from 'eslint-plugin-next';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import tailwindcssPlugin from 'eslint-plugin-tailwindcss';
import globals from 'globals';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tsEslintParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tsEslintPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      tailwindcss: tailwindcssPlugin,
    },
    rules: {
      ...eslint.configs.recommended.rules,
      ...tsEslintPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...tailwindcssPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'warn',
      'tailwindcss/no-contradicting-classname': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
  },
  // Next.js specific configuration
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ...nextPlugin.configs['core-web-vitals'],
  },
  // Ignore files
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/.next/**',
      '**/out/**',
    ],
  },
];
