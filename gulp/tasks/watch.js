/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files

   gulp.watch() does not recognize new or deleted files. We may want to switch to using
   the "gulp-watch" package availble through NPM
*/

var gulp   = require('gulp');
var config = require('../config');
var gutil  = require('gulp-util');
var watch  = require('gulp-watch');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
  watch(config.styles.src, function() { gulp.start('styles');});
  watch(config.images.src, function() { gulp.start('images');});
  watch(config.markup.src, function() { gulp.start('markup');});
  watch(config.templates.src, function() { gulp.start('templates');});
  watch(config.json.src, function() { gulp.start('json');});
  gulp.start('test-watch');

});
