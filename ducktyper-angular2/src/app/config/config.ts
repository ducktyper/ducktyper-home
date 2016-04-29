let config = {};
if (process.env.NODE_ENV == 'production') { 
  config = {
    assetHost: "https://s3-ap-southeast-2.amazonaws.com/ducktyper/"
  }
} else {
  config = {
    assetHost: ""
  }
}

module.exports = config;
