module.exports = () => {
  console.log(process.env.WW_CONTEXT)
  return {
    lintOnSave: false,
    publicPath: process.env.WW_CONTEXT === 'editor' ? '/' : '/_website',
    outputDir: `dist-${process.env.WW_CONTEXT}`,
    pages: {
      index: {
        entry: `src/${process.env.WW_CONTEXT}/main.js`,
        template: `templates/${process.env.WW_CONTEXT}.html`,
        filename: 'index.html',
      },
    },
    ...(process.env.WW_CONTEXT === 'editor'
      ? {
          devServer: {
            proxy: {
              '/_website/': {
                target: 'http://localhost:4041',
              },
            },
          },
        }
      : {}),
    ...(process.env.WW_CONTEXT === 'website'
      ? {
          configureWebpack: {
            externals: {
              vue: 'Vue',
            },
          },
        }
      : {}),
  }
}
