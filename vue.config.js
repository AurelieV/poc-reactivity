module.exports = () => {
  return {
    lintOnSave: false,
    pages: {
      index: {
        entry: 'src/editor/main.js',
        template: 'public/editor.html',
        filename: 'index.html',
      },
      website: {
        entry: 'src/website/main.js',
        template: 'public/website.html',
        filename: '_website/index.html',
      },
    },
  }
}
