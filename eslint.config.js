import antfu from '@antfu/eslint-config'
import unocss from '@unocss/eslint-plugin'

export default antfu(
  {
    ignores: ['public/data.js'],
  },
  unocss.configs.flat,
  {
    rules: {
      'eslint-comments/no-unlimited-disable': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/use-v-on-exact': 'off',
      'node/prefer-global/process': 'off',
      'prefer-promise-reject-errors': 'off',
    },
  },
)
