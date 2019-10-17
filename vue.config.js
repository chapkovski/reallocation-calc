module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/reallocation-calc/'
      : '/reallocation-calc/',
      outputDir: './jopa',
      filenameHashing:false
  }