import globals from 'globals'
import jsConfig from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import unicornPlugin from 'eslint-plugin-unicorn'
import antfuPlugin from 'eslint-plugin-antfu'
import { GLOB_MARKDOWN, GLOB_SRC, GLOB_SRC_EXT } from './shared.js'

export { importPlugin, unicornPlugin, antfuPlugin }

/** @type {import('eslint-define-config').FlatESLintConfigItem[]} */
export const js = [
  jsConfig.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node
      },
      sourceType: 'module'
    },
    plugins: {
      antfu: antfuPlugin
    },

    rules: {
      quotes: ['warn', 'single'],
      semi: ['warn', 'never'],
      'comma-dangle': [
        'warn',
        {
          arrays: 'never',
          objects: 'never',
          imports: 'never',
          exports: 'never',
          functions: 'never'
        }
      ],

      'no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'all',
          argsIgnorePattern: '^_'
        }
      ],
      'no-constant-condition': 'warn',
      'no-debugger': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-restricted-syntax': [
        'error',
        'ForInStatement',
        'LabeledStatement',
        'WithStatement'
      ],
      'no-return-await': 'warn',
      'no-empty': ['error', { allowEmptyCatch: true }],
      'sort-imports': [
        'error',
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
          allowSeparatedGroups: false
        }
      ],

      'no-var': 'error',
      'prefer-const': [
        'warn',
        { destructuring: 'all', ignoreReadBeforeAssign: true }
      ],
      'prefer-arrow-callback': [
        'error',
        { allowNamedFunctions: false, allowUnboundThis: true }
      ],
      'object-shorthand': [
        'error',
        'always',
        { ignoreConstructors: false, avoidQuotes: true }
      ],
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      'require-await': 'error',

      'array-callback-return': 'error',
      'block-scoped-var': 'error',
      eqeqeq: ['error', 'smart'],
      'no-alert': 'warn',
      'no-case-declarations': 'error',
      'no-fallthrough': ['warn', { commentPattern: 'break[\\s\\w]*omitted' }],
      'no-multi-str': 'error',
      'no-with': 'error',
      'no-void': 'error',
      'no-duplicate-imports': 'error',
      'no-implicit-coercion': 'warn',

      'no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true
        }
      ],
      'no-lonely-if': 'error',
      'prefer-exponentiation-operator': 'error',

      'antfu/top-level-function': 'error'
    }
  },
  {
    files: ['**/scripts/*', '**/cli.*'],
    rules: {
      'no-console': 'off'
    }
  },
  {
    files: ['**/*.{test,spec}.js?(x)'],
    rules: {
      'no-unused-expressions': 'off'
    }
  }
]

/** @type {import('eslint-define-config').FlatESLintConfigItem[]} */
export const jsx = [
  {
    files: ['**/*.jsx'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  }
]

/** @type {import('eslint-define-config').FlatESLintConfigItem[]} */
export const imports = [
  {
    plugins: {
      import: importPlugin,
      antfu: antfuPlugin
    },
    settings: {
      'import/resolver': {
        node: { extensions: ['.js', '.mjs', '.ts', '.mts', '.d.ts'] }
      }
    },
    rules: {
      'import/first': 'error',
      'import/no-mutable-exports': 'error',
      'import/no-duplicates': 'error',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type'
          ],
          pathGroups: [{ pattern: '@/**', group: 'internal' }],
          pathGroupsExcludedImportTypes: ['type']
        }
      ],
      'import/no-default-export': 'error',
      'import/newline-after-import': [
        'error',
        { count: 1, considerComments: true }
      ],

      'antfu/import-dedupe': 'error',
      'antfu/prefer-inline-type-import': 'error'
    }
  },
  {
    files: [
      `**/*config*.${GLOB_SRC_EXT}`,
      `**/views/${GLOB_SRC}`,
      `**/pages/${GLOB_SRC}`,
      '**/{index,vite,esbuild,rollup,webpack,rspack}.ts',
      '**/*.d.ts',
      `${GLOB_MARKDOWN}/**`
    ],
    plugins: {
      import: importPlugin
    },
    rules: {
      'import/no-default-export': 'off'
    }
  }
]

/** @type {import('eslint-define-config').FlatESLintConfigItem[]} */
export const unicorn = [
  {
    plugins: {
      unicorn: unicornPlugin
    },
    rules: {
      'unicorn/better-regex': 'error',
      'unicorn/catch-error-name': 'error',
      'unicorn/consistent-destructuring': 'error',
      'unicorn/consistent-function-scoping': 'error',
      'unicorn/custom-error-definition': 'error',
      'unicorn/empty-brace-spaces': 'error',
      'unicorn/error-message': 'error',
      'unicorn/escape-case': 'error',
      'unicorn/expiring-todo-comments': 'error',
      'unicorn/explicit-length-check': 'error',
      'unicorn/filename-case': 'error',
      'unicorn/import-style': 'error',
      'unicorn/new-for-builtins': 'error',
      'unicorn/no-abusive-eslint-disable': 'error',
      'unicorn/no-array-callback-reference': 'error',
      // 'unicorn/no-array-for-each': 'error',
      'unicorn/no-array-method-this-argument': 'error',
      'unicorn/no-array-push-push': 'error',
      // 'unicorn/no-array-reduce': 'error',
      'unicorn/no-await-expression-member': 'error',
      'unicorn/no-console-spaces': 'error',
      'unicorn/no-document-cookie': 'error',
      'unicorn/no-empty-file': 'error',
      // 'unicorn/no-for-loop': 'error',
      'unicorn/no-hex-escape': 'error',
      'unicorn/no-instanceof-array': 'error',
      'unicorn/no-invalid-remove-event-listener': 'error',
      // 'unicorn/no-keyword-prefix': 'error',
      'unicorn/no-lonely-if': 'error',
      'unicorn/no-negated-condition': 'error',
      'unicorn/no-nested-ternary': 'error',
      'unicorn/no-new-array': 'error',
      'unicorn/no-new-buffer': 'warn',
      // 'unicorn/no-null': 'error',
      'unicorn/no-object-as-default-parameter': 'error',
      'unicorn/no-process-exit': 'error',
      'unicorn/no-static-only-class': 'error',
      'unicorn/no-thenable': 'error',
      'unicorn/no-this-assignment': 'error',
      'unicorn/no-typeof-undefined': 'error',
      'unicorn/no-unnecessary-await': 'error',
      'unicorn/no-unreadable-array-destructuring': 'error',
      'unicorn/no-unreadable-iife': 'error',
      'unicorn/no-unused-properties': 'error',
      'unicorn/no-useless-fallback-in-spread': 'error',
      'unicorn/no-useless-length-check': 'error',
      'unicorn/no-useless-promise-resolve-reject': 'error',
      'unicorn/no-useless-spread': 'error',
      'unicorn/no-useless-switch-case': 'error',
      'unicorn/no-useless-undefined': 'error',
      'unicorn/no-zero-fractions': 'error',
      'unicorn/number-literal-case': 'error',
      'unicorn/numeric-separators-style': 'error',
      'unicorn/prefer-add-event-listener': 'error',
      'unicorn/prefer-array-find': 'error',
      'unicorn/prefer-array-flat': 'error',
      'unicorn/prefer-array-flat-map': 'error',
      'unicorn/prefer-array-index-of': 'error',
      'unicorn/prefer-array-some': 'error',
      'unicorn/prefer-at': 'error',
      'unicorn/prefer-blob-reading-methods': 'error',
      'unicorn/prefer-code-point': 'error',
      'unicorn/prefer-date-now': 'error',
      'unicorn/prefer-default-parameters': 'error',
      'unicorn/prefer-dom-node-append': 'error',
      'unicorn/prefer-dom-node-dataset': 'error',
      'unicorn/prefer-dom-node-remove': 'error',
      'unicorn/prefer-dom-node-text-content': 'error',
      'unicorn/prefer-event-target': 'error',
      // 'unicorn/prefer-export-from': 'error',
      'unicorn/prefer-includes': 'error',
      'unicorn/prefer-json-parse-buffer': 'error',
      'unicorn/prefer-keyboard-event-key': 'error',
      'unicorn/prefer-logical-operator-over-ternary': 'error',
      'unicorn/prefer-math-trunc': 'error',
      'unicorn/prefer-modern-dom-apis': 'warn',
      'unicorn/prefer-modern-math-apis': 'warn',
      'unicorn/prefer-module': 'error',
      'unicorn/prefer-native-coercion-functions': 'error',
      'unicorn/prefer-negative-index': 'error',
      'unicorn/prefer-node-protocol': 'error',
      // 'unicorn/prefer-number-properties': 'error',
      'unicorn/prefer-object-from-entries': 'error',
      'unicorn/prefer-optional-catch-binding': 'error',
      'unicorn/prefer-prototype-methods': 'error',
      'unicorn/prefer-query-selector': 'error',
      'unicorn/prefer-reflect-apply': 'error',
      'unicorn/prefer-regexp-test': 'error',
      'unicorn/prefer-set-has': 'error',
      'unicorn/prefer-set-size': 'error',
      'unicorn/prefer-spread': 'error',
      // 'unicorn/prefer-string-replace-all': 'error',
      // 'unicorn/prefer-string-slice': 'error',
      'unicorn/prefer-string-starts-ends-with': 'error',
      'unicorn/prefer-string-trim-start-end': 'error',
      'unicorn/prefer-switch': 'error',
      // 'unicorn/prefer-ternary': 'error',
      // 'unicorn/prefer-top-level-await': 'error',
      'unicorn/prefer-type-error': 'error',
      // 'unicorn/prevent-abbreviations': 'error',
      // 'unicorn/relative-url-style': 'error',
      'unicorn/require-array-join-separator': 'error',
      'unicorn/require-number-to-fixed-digits-argument': 'error',
      'unicorn/require-post-message-target-origin': 'error',
      'unicorn/string-content': 'error',
      'unicorn/switch-case-braces': 'error',
      'unicorn/template-indent': 'error',
      'unicorn/text-encoding-identifier-case': 'error',
      'unicorn/throw-new-error': 'error'
    }
  }
]
