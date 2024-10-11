require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/custom-event-name-casing': ['error', {
      ignores: ['v-list-item-content', 'v-list-item-group', 'v-list-item-avatar']
    }]
  },
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      rules: {
        'vue/no-reserved-component-names': ['error', {
          isCustomElement: (tag) => ['v-list-item-content', 'v-list-item-group', 'v-list-item-avatar'].includes(tag)
        }]
      }
    }
  ]
};
