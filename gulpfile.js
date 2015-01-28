/*
  gulpfile.js

  Gulp tasks are in /gulp/tasks
  To add new task called "foo", create the task as gulp/tasks/foo.js

  Gulp setup taken from: https://github.com/greypants/gulp-starter

*/

var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });
