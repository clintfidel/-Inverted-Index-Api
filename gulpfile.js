const gulp = require('gulp');
<<<<<<< Updated upstream
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
=======

gulp.task('default', () => {
  console.log('gulp is working');
>>>>>>> Stashed changes
});
