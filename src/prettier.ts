// @ts-expect-error
import prettierPlugin from 'eslint-plugin-prettier'

// @ts-expect-error
import prettierConfig from 'eslint-config-prettier'
import type { FlatESLintConfigItem } from 'eslint-define-config'

const prettierConflictRules = { ...prettierConfig.rules }
delete prettierConflictRules['vue/html-self-closing']

export const prettier: FlatESLintConfigItem[] = [
  {
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      ...prettierConflictRules,
      ...prettierPlugin.configs.recommended.rules,
      'prettier/prettier': [
        'warn',
        {
          semi: false,
          printWidth: 80,
          singleQuote: true,
          trailingComma: 'none',
          jsxSingleQuote: true,
          arrowParens: 'avoid'
        }
      ]
    }
  }
]
