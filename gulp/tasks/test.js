var gulp = require('gulp');
var karma = require('karma').server;
var config = require('../config').test;

/**
 * Run test once and exit
 */
gulp.task('test', ['lint'], function () {
  return karma.start({
    configFile: config.karmaConfigFile,
    singleRun: true,
    action: 'watch'
  });
});

/**
 * Run test as a watch
 */
gulp.task('test-watch', ['lint'], function () {
  return karma.start({
    configFile: config.karmaConfigFile,
    singleRun: false,
    action: 'watch'
  });
});



