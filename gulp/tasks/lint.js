var jshint = require('gulp-jshint');
var gulp   = require('gulp');
var config = require('../config').lint;

gulp.task('lint', function() {
  var error = false;
  return gulp.src(config.src)
    .pipe(jshint())
    .pipe(jshint.reporter(config.reporter))
    .pipe(jshint.reporter('fail'))
    .on('error', function(e){
        error = true;
    })
    .on('end', function(){
        if(error) {
            process.exit();
        }
    });
});
