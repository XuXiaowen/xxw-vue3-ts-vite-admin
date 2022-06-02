module.exports = {
  env: {
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    // "eslint:recommended",
    // "plugin:vue/essential",
    // "plugin:@typescript-eslint/recommended"
    'plugin:vue/vue3-essential',
    'airbnb-base'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser:
      '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {}
};
