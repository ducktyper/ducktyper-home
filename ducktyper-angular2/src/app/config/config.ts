let config = {};
if (process.env.NODE_ENV == 'production') { 
  config = {
    assetHost: "https://s3-ap-southeast-2.amazonaws.com/ducktyper/",
    apiHost: "http://ducktyper.co.nz/",
  }
} else {
  config = {
    assetHost: "",
    apiHost: "http://localhost:2281/",
  }
}

module.exports = config;
