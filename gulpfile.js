const gulp = require('gulp');
const browsersync = require('browser-sync');
// implementation of task
/* gulp.task('hello', () => {
  console.log('gulp is working');
});*/
gulp.task('browserSync', () => {
  browser - sync.init({
    server: {
      baseDir: 'src'
    },
  });
});
