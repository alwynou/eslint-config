import { getPackageInfoSync } from 'local-pkg'
import vueParser from 'vue-eslint-parser'

// @ts-expect-error
import vuePlugin from 'eslint-plugin-vue'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import { ts } from './typescript.js'
import { GLOB_VUE } from './shared.js'
import type { FlatESLintConfigItem, Rules } from 'eslint-define-config'

export { vueParser, vuePlugin }

export function getVueVersion() {
  const pkg = getPackageInfoSync('vue', { paths: [process.cwd()] })
  if (
    pkg &&
    typeof pkg.version === 'string' &&
    !Number.isNaN(Number(pkg.version[0]))
  ) {
    return Number(pkg.version[0])
  }
  return 3
}
const isVue3 = getVueVersion() === 3

export const reactivityTransform: FlatESLintConfigItem[] = [
  {
    languageOptions: {
      globals: {
        $: 'readonly',
        $$: 'readonly',
        $ref: 'readonly',
        $computed: 'readonly',
        $shallowRef: 'readonly',
        $toRef: 'readonly',
        $customRef: 'readonly'
      }
    },
    plugins: {
      vue: vuePlugin
    },
    rules: {
      'vue/no-setup-props-destructure': 'off'
    }
  }
]

const vueCustomRules: Rules = {
  'vue/max-attributes-per-line': 'off',
  'vue/no-v-html': 'off',
  'vue/multi-word-component-names': 'off',
  'vue/require-prop-types': 'off',
  'vue/require-default-prop': 'off',

  'vue/html-self-closing': [
    'error',
    {
      html: {
        void: 'always',
        normal: 'always',
        component: 'always'
      },
      svg: 'always',
      math: 'always'
    }
  ],
  'vue/component-tags-order': [
    'error',
    { order: ['script', 'template', 'style'] }
  ],
  'vue/custom-event-name-casing': ['error', 'camelCase'],
  'vue/no-useless-v-bind': 'error',
  'vue/no-unused-refs': 'error',
  'vue/padding-line-between-blocks': ['error', 'always'],

  'vue/prefer-template': 'error',
  'vue/eqeqeq': ['error', 'smart'],
  'vue/no-constant-condition': 'warn',
  'vue/object-shorthand': [
    'error',
    'always',
    {
      ignoreConstructors: false,
      avoidQuotes: true
    }
  ],
  'vue/no-loss-of-precision': 'error',
  'vue/no-empty-pattern': 'error'
}

const vue3Rules: Rules = {
  ...vuePlugin.configs.base.rules,
  ...vuePlugin.configs['vue3-essential'].rules,
  ...vuePlugin.configs['vue3-strongly-recommended'].rules,
  ...vuePlugin.configs['vue3-recommended'].rules
}

const vue2Rules: Rules = {
  ...vuePlugin.configs.base.rules,
  ...vuePlugin.configs.essential.rules,
  ...vuePlugin.configs['strongly-recommended'].rules,
  ...vuePlugin.configs.recommended.rules
}

export const vue: FlatESLintConfigItem[] = [
  {
    files: [GLOB_VUE],
    plugins: {
      vue: vuePlugin,
      '@typescript-eslint': tsPlugin
    },
    languageOptions: {
      parser: vueParser as any,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    processor: vuePlugin.processors['.vue'],
    rules: {
      ...ts[0].rules
    }
  },
  {
    plugins: {
      vue: vuePlugin
    },
    rules: {
      ...(isVue3 ? vue3Rules : vue2Rules),
      ...vueCustomRules
    }
  },
  ...reactivityTransform
]
