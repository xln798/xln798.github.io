module.exports = {
  publicPath: "./",
    css: {
      loaderOptions: {
        less:{
            // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
            // `primary` is global variables fields name
            globalVars: {
              primary: "#fff"
            }
          }
      }
    }
  }