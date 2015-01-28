// Locations of main directories

var dest = "./dist";
var src = "./src";
var approot = process.cwd();

/*
  Seperate bundles for different parts of application?

  var componentScripts = src + '/app/components/components.js';
  var sharedScripts = src + '/app/shared/shared.js';
  var assetScripts = src + '/assets/scripts.js';
*/


module.exports = {
  lint: {
    src: src + "/**/*.js",
    reporter: 'jshint-stylish'
  },
  scripts: {
    src: src + "/**/*.js"
  },
  test: {
    karmaConfigFile: approot + "/karma.conf.js",
  }
};
