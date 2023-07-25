import { eslintComments } from './eslint-comments.js'
import { imports, js, jsx, unicorn } from './js.js'
import { jsonc, packageOrder } from './jsonc.js'
import { markdown } from './markdown.js'
import { prettier } from './prettier.js'
import { GLOB_EXCLUDE } from './shared.js'
import { ts } from './typescript.js'
import { vue } from './vue.js'
import { yml } from './yml.js'
import type { FlatESLintConfigItem } from 'eslint-define-config'

export {
  eslintComments as eslintCommentsRules,
  imports as importsRules,
  js as jsRules,
  jsx as jsxRules,
  unicorn as unicornRules,
  jsonc as jsoncRules,
  packageOrder as packageOrderRules,
  markdown as markdownRules,
  prettier as prettierRules,
  vue as vueRules,
  yml as ymlRules,
  ts as tsRules
}

export const basicRules = [
  { ignores: GLOB_EXCLUDE },
  ...js,
  ...jsx,
  ...ts,
  ...imports,
  ...unicorn,
  ...jsonc,
  ...packageOrder,
  ...yml,
  ...eslintComments
] as FlatESLintConfigItem[]

export const allRules = [
  ...vue,
  ...basicRules,
  ...markdown,
  ...prettier
] as FlatESLintConfigItem[]

export function alwynou(
  config: FlatESLintConfigItem[] = [],
  {
    vue: enableVue = true,
    prettier: enablePrettier = true,
    markdown: enableMarkdown = true
  }: {
    vue?: boolean
    prettier?: boolean
    markdown?: boolean
  } = {}
) {
  const configs = []
  configs.push(...basicRules)

  if (enableVue) {
    configs.push(...vue)
  }
  if (enableMarkdown) {
    configs.push(...markdown)
  }
  if (enablePrettier) {
    configs.push(...prettier)
  }
  if (Object.keys(config).length > 0) {
    configs.push(...(Array.isArray(config) ? config : [config]))
  }
  return configs as FlatESLintConfigItem[]
}
