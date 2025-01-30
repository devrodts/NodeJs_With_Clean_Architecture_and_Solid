const { rules } = require('eslint-config-love')

module.exports = (async function config() {
    const { default: love } = await import('eslint-config-love')
    return [
      {
        ...love,
        files: ['**/*.js', '**/*.ts'],
        parserOptions:{
          ecmaVersion: 2019,
          sourceType: "commomJS",
          project: "./tsconfig.json"
        },
      },
    ]
  })()