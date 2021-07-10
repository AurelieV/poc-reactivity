module.exports = {
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  overrides: [
    {
      files: [
        '.eslintrc.js',
        'tailwind.config.js',
        'postcss.config.js',
        'vue.config.js',
        'scripts/**',
      ],
      env: {
        node: true,
      },
    },
  ],
}
