import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import antfuPlugin from 'eslint-plugin-antfu'
import { GLOB_TS, GLOB_TSX } from './shared.js'
import type { FlatESLintConfigItem } from 'eslint-define-config'

export { tsParser, tsPlugin }

export const ts: FlatESLintConfigItem[] = [
  {
    files: [GLOB_TS, GLOB_TSX],
    languageOptions: {
      parser: tsParser as any,
      parserOptions: {
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      antfu: antfuPlugin
    },
    rules: {
      ...tsPlugin.configs['eslint-recommended'].overrides?.[0].rules,
      'no-unused-vars': 'off',
      'no-duplicate-imports': 'off', // 与类型单独引入冲突，所以关闭该规则

      ...tsPlugin.configs.recommended.rules,
      '@typescript-eslint/array-type': 'warn',
      '@typescript-eslint/ban-tslint-comment': 'warn',
      '@typescript-eslint/class-literal-property-style': 'warn',
      '@typescript-eslint/consistent-generic-constructors': 'warn',
      '@typescript-eslint/consistent-indexed-object-style': 'warn',
      '@typescript-eslint/consistent-type-assertions': 'warn',
      '@typescript-eslint/consistent-type-definitions': 'warn',
      '@typescript-eslint/no-confusing-non-null-assertion': 'warn',
      '@typescript-eslint/no-duplicate-enum-values': 'warn',
      '@typescript-eslint/no-dynamic-delete': 'warn',
      '@typescript-eslint/no-extraneous-class': 'warn',
      '@typescript-eslint/no-invalid-void-type': 'warn',
      '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'warn',
      'no-useless-constructor': 'off',
      '@typescript-eslint/no-useless-constructor': 'warn',
      '@typescript-eslint/prefer-for-of': 'warn',
      '@typescript-eslint/prefer-function-type': 'warn',
      '@typescript-eslint/prefer-literal-enum-member': 'warn',
      '@typescript-eslint/prefer-optional-chain': 'warn',
      '@typescript-eslint/prefer-ts-expect-error': 'warn',
      '@typescript-eslint/unified-signatures': 'warn',

      // 需配置 `parserOptions.project: [tsconfigPath]` 生效
      // 'dot-notation': 'off',
      // '@typescript-eslint/dot-notation': 'warn',
      // '@typescript-eslint/no-base-to-string': 'warn',
      // '@typescript-eslint/no-meaningless-void-operator': 'warn',
      // '@typescript-eslint/no-mixed-enums': 'warn',
      // 'no-throw-literal': 'off',
      // '@typescript-eslint/no-throw-literal': 'warn',
      // '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
      // '@typescript-eslint/no-unnecessary-condition': 'warn',
      // '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
      // '@typescript-eslint/no-unsafe-declaration-merging': 'warn',
      // '@typescript-eslint/no-unsafe-enum-comparison': 'warn',
      // '@typescript-eslint/non-nullable-type-assertion-style': 'warn',
      // '@typescript-eslint/prefer-includes': 'warn',
      // '@typescript-eslint/prefer-nullish-coalescing': 'warn',
      // '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
      // '@typescript-eslint/prefer-return-this-type': 'warn',
      // '@typescript-eslint/prefer-string-starts-ends-with': 'warn',

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
