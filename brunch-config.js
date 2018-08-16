module.exports = {
  modules: {
    wrapper: false,
    definition: false
  },
  paths: {
    watched: ["source/javascripts"],
    public: '.tmp/dist'
  },
  files: {
    javascripts: {
      joinTo: 'javascripts/all.js'
    }
  },
  plugins: {
    babel: {
      presets: ['es2015'],
      pattern: /\.(es6)$/
    }
  }
}
