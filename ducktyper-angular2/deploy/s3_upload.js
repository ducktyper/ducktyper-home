var fs = require('fs');
var path = require('path');
var AWS = require('aws-sdk'); 
AWS.config.region = 'ap-southeast-2';

// Load credential from ~/.aws/credential.js
// process.env['AWS_ACCESS_KEY_ID']     = "XXX";
// process.env['AWS_SECRET_ACCESS_KEY'] = "XXX";
var home = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
require(path.join(home, ".aws", "credential.js"));

// config
var ignoreVendor = true;
process.argv.forEach(function (val, index, array) {
  if (val === "--all") ignoreVendor = false;
});

// Deploy files under dist folder
var dist = 'dist';
var canIgnore = function(file) {
  if (!ignoreVendor) return false;
  return (file === "polyfills.bundle.js" || file === "vendor.bundle.js");
}
fs.readdir(dist, function (err, files) {
  if (err) {
    console.error( "Could not list the directory.", err);
    process.exit(1);
  }
  files.forEach( function(file, index) {
    fs.stat(path.join(dist, file), function( error, stat ) {
      if (stat.isFile() && !canIgnore(file)) {
        var filestream = fs.createReadStream(path.join(dist, file));
        var s3obj = new AWS.S3({params: {Bucket: 'ducktyper', Key: file}});
        s3obj.upload({Body: filestream}).
          send(function(err, data) {process.stdout.write("*");});
      }
    });
  });
});

// Deploy css and html files under src folder
var src = 'src';
var deployFolderUnderSrc = function(subpath) {
  fs.readdir(path.join(src, subpath), function (err, files) {
    if (err) {
      console.error( "Could not list the directory.", err );
      process.exit( 1 );
    }
    files.forEach( function( file, index ) {
      var fullpath = path.join(subpath, file);
      fs.stat(path.join(src, fullpath), function( error, stat ) {
        if (stat.isDirectory()) {
          deployFolderUnderSrc(fullpath);
        } else if (stat.isFile() && file.match(/.css$|.html$/) != null) {
          var filestream = fs.createReadStream(path.join(src, fullpath));
          var s3obj = new AWS.S3({params: {Bucket: 'ducktyper', Key: fullpath}});
          s3obj.upload({Body: filestream}).
            send(function(err, data) {process.stdout.write("*");});
        }
      });
    });
  });
}
deployFolderUnderSrc("");
