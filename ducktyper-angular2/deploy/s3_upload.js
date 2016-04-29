var fs = require('fs');
var path = require('path');
var AWS = require('aws-sdk'); 

var home = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
require(path.join(home, ".aws", "credential.js"));


AWS.config.region = 'ap-southeast-2';

// Deploy files under dist folder
var dist = 'dist';
fs.readdir(dist, function (err, files) {
  if (err) {
    console.error( "Could not list the directory.", err);
    process.exit(1);
  }
  files.forEach( function(file, index) {
    fs.stat(path.join(dist, file), function( error, stat ) {
      if (stat.isFile()) {
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
