module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/reallocation-calc/'
      : '/',
      outputDir: '../reallocation-calc',
      filenameHashing:false
  }