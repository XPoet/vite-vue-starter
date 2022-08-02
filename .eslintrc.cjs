const path = require('path')
const fs = require('fs')

function parseAutoImportsDts(contents) {
  const matchResults = contents.matchAll(/^\s+const (\w+): typeof import/gm)
  return Array.from(matchResults, ([, word]) => word)
}

function dts2Globals() {
  const SRC = path.resolve(__dirname, './auto-imports.d.ts')
  const contents = fs.readFileSync(SRC, { encoding: 'utf-8' })
  const parsed = parseAutoImportsDts(contents)

  return parsed.reduce((acc, word) => {
    acc[word] = 'readonly'
    return acc
  }, {})
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
    'plugin:prettier/recommended' // 格式化规则：prettier > eslint
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-absolute-path': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-console': 'off'
  },
  globals: {
    ...dts2Globals()
  }
}
