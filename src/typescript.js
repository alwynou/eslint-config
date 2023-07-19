import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import antfuPlugin from 'eslint-plugin-antfu'
import { GLOB_TS, GLOB_TSX } from './shared.js'

export { tsParser, tsPlugin }

/** @type {import('eslint-define-config').FlatESLintConfigItem[]} */
export const typescript = [
  {
    files: [GLOB_TS, GLOB_TSX],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        sourceType: 'module',
        project: true
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      antfu: antfuPlugin
    },
    rules: {
      ...tsPlugin.configs['eslint-recommended'].overrides[0].rules,
      ...tsPlugin.configs.strict.rules,
      'no-duplicate-imports': 'off', // 与类型单独引入冲突，所以关闭该规则

      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'all',
          argsIgnorePattern: '^_'
        }
      ],
      '@typescript-eslint/no-redeclare': 'error',

      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports',
          disallowTypeAnnotations: false
        }
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/prefer-as-const': 'warn',

      'antfu/generic-spacing': 'warn',
      'antfu/no-ts-export-equal': 'warn'
    }
  },
  {
    files: ['**/*.d.ts'],
    rules: {
      'import/no-duplicates': 'off'
    }
  },
  {
    files: ['**/*.{test,spec}.ts?(x)'],
    rules: {
      'no-unused-expressions': 'off'
    }
  },
  {
    files: ['**/*.js', '**/*.cjs'],
    rules: {
      '@typescript-eslint/no-var-requires': 'off'
    }
  }
]
