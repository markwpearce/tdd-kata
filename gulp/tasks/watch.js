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

gulp.task('watch', ['setWatch'], function() {
    gulp.start('test-watch');

});
