var _            = require('lodash');
var gutil        = require('gulp-util');
var util         = require('util');
var fs = require('fs');
/**
 * Helper function(s)
 */


 module.exports = {

  // bowerConfig is your bower.json
  getBowerPackageIds: function(bowerConfig) {
    // read bower.json and get dependencies' package ids
    bowerConfig = "../../"+bowerConfig;
    var bowerManifest = {};
    try {
      bowerManifest = require(bowerConfig);
    } catch (e) {
      // does not have a bower.json manifest
      console.log(__dirname);
      gutil.log("Error loading bower packages at "+bowerConfig+": "+e)
    }
    return _.keys(bowerManifest.dependencies) || [];
  },

  // nodeConfig is your package.json
  getNPMPackageIds: function(nodeConfig) {
    // read package.json and get dependencies' package ids
    nodeConfig = "../../"+nodeConfig;
    var packageManifest = {};
    try {
      packageManifest = require(nodeConfig);
    } catch (e) {
      // does not have a package.json manifest
      console.log(__dirname);
      gutil.log("Error loading NPM packages at "+nodeConfig+": "+e)
    }
    return _.keys(packageManifest.dependencies) || [];
  }
};



