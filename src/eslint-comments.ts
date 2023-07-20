// @ts-expect-error
import commentsPlugin from 'eslint-plugin-eslint-comments'
import type { FlatESLintConfigItem } from 'eslint-define-config'

export const eslintComments: FlatESLintConfigItem[] = [
  {
    plugins: {
      'eslint-comments': commentsPlugin
    },
    rules: {
      ...commentsPlugin.configs.recommended.rules,
      'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }]
    }
  }
]
