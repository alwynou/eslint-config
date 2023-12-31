import jsoncPlugin, { configs } from 'eslint-plugin-jsonc'
import jsoncParser from 'jsonc-eslint-parser'
import { GLOB_JSON, GLOB_JSON5, GLOB_JSONC } from './shared.js'
import type { FlatESLintConfigItem, Rules } from 'eslint-define-config'

export const jsonc: FlatESLintConfigItem[] = [
  {
    files: [GLOB_JSON, GLOB_JSON5, GLOB_JSONC],
    plugins: {
      jsonc: jsoncPlugin
    },
    languageOptions: {
      parser: jsoncParser as any
    },
    rules: {
      ...configs['recommended-with-jsonc'].rules,
      'jsonc/quote-props': 'off',
      'jsonc/quotes': 'off'
    } as Rules
  }
]

export const packageOrder: FlatESLintConfigItem[] = [
  {
    files: ['**/package.json'],
    rules: {
      'jsonc/sort-keys': [
        'error',
        {
          pathPattern: '^$',
          order: [
            'name',
            'version',
            'private',
            'packageManager',
            'description',
            'type',
            'keywords',
            'license',
            'homepage',
            'bugs',
            'repository',
            'author',
            'contributors',
            'funding',
            'files',
            'main',
            'module',
            'types',
            'exports',
            'typesVersions',
            'unpkg',
            'jsdelivr',
            'browser',
            'bin',
            'man',
            'directories',
            'publishConfig',
            'scripts',
            'peerDependencies',
            'peerDependenciesMeta',
            'optionalDependencies',
            'dependencies',
            'devDependencies',
            'engines',
            'config',
            'overrides',
            'pnpm',
            'husky',
            'lint-staged',
            'eslintConfig'
          ]
        },
        {
          pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
          order: { type: 'asc' }
        }
      ]
    }
  }
]
