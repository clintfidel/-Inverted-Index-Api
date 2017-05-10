import gulp from 'gulp';
import babel from 'gulp-babel';
import server from 'gulp-nodemon';
import watch from 'gulp-watch';
import coveralls from 'gulp-coveralls';
import istanbul from 'gulp-babel-istanbul';
import jasmineNode from 'gulp-jasmine-node';
import injectModules from 'gulp-inject-modules';


gulp.task('pre-test', () => {
  gulp.src(['src/*.js', 'test/*.js'])
 // Covering file
 .pipe(istanbul({ includeUntested: true }))
 // using require to return covered files
 .pipe(istanbul.hookRequire());
});


gulp.task('run-tests', () => {
  gulp.src('test/*.js')
      .pipe(babel())
      .pipe(jasmineNode());
});

// Test Coverage: sends report to coverage folder
gulp.task('coverage', (cb) => {
  gulp.src(['src/*js'])
    .pipe(istanbul())
    .pipe(injectModules())
    .on('finish', () => {
      gulp.src('test/*.js')
      .pipe(babel())
      .pipe(injectModules())
      .pipe(jasmineNode())
      .pipe(istanbul.writeReports())
      .pipe(istanbul.enforceThresholds({ thresholds: { global: 50 } }))
      .on('end', cb);
    });
});

// Runs server
gulp.task('serve', ['transpile'], () => {
  server({
    script: 'src/*.js',
    ext: 'js json html',
    ignore: [
      'node_modules/',
      '/dist',
      '/test',
      'gulpfile.babel.js']
  });
});

/**
 * transpiles code using babel through gulp
 */
gulp.task('transpile', () => {
  gulp.src(['src/*.js'])
          .pipe(babel({
            presets: ['es2015']
          }))
          .pipe(gulp.dest('dist'));
});

gulp.task('coveralls', ['run-tests'], () => {
  return gulp.src('coverage/lcov.info')
    .pipe(coveralls());
});

gulp.task('start', ['serve'], () => {
  gulp.src(['src/routes.js', 'src/app.js'])
  .pipe(server());
});

gulp.task('watch', () => {
  gulp.watch('src/app.js, src/routes.js', ['serve']);
});

gulp.task('default', ['pre-test', 'test', 'coverage', 'serve', 'coveralls', 'transpile', 'watch']);
