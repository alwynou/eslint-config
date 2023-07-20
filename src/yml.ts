import ymlPlugin, { configs } from 'eslint-plugin-yml'
import ymlParser from 'yaml-eslint-parser'
import { GLOB_YAML } from './shared.js'
import type { FlatESLintConfigItem, Rules } from 'eslint-define-config'

export const yml: FlatESLintConfigItem[] = [
  {
    files: [GLOB_YAML],
    plugins: {
      yml: ymlPlugin
    },
    languageOptions: {
      parser: ymlParser as any
    },
    rules: {
      ...configs.standard.rules,
      ...configs.prettier.rules,
      'yml/no-empty-mapping-value': 'off'
    } as Rules
  }
]
