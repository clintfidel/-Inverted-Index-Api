import gulp from 'gulp';
import babel from 'gulp-babel';
import server from 'gulp-nodemon';
import watch from 'gulp-watch';
import exit from 'gulp-exit';
import coveralls from 'gulp-coveralls';
import istanbul from 'gulp-babel-istanbul';
import jasmineNode from 'gulp-jasmine-node';
import injectModules from 'gulp-inject-modules';


gulp.task('pre-test', () => {
  gulp.src(['src/*.js', 'test/*.js'])
 .pipe(istanbul({ includeUntested: true }))
 .pipe(istanbul.hookRequire());
});

// Run test
gulp.task('run-tests', () => {
  gulp.src('test/*.js')
      .pipe(babel())
      .pipe(jasmineNode())
      .pipe(exit());
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
    script: 'dist/*.js',
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

gulp.task('coveralls', ['coverage'], () => {
  gulp.src('coverage/lcov.info')
    .pipe(coveralls());
});

gulp.task('start', ['serve'], () => {
  gulp.src(['src/routes.js', 'src/app.js'])
  .pipe(server());
});

gulp.task('watch', () => {
  gulp.watch('src/app.js, src/routes.js, test/*.js', ['serve']);
});

gulp.task('default', ['pre-test', 'run-tests', 'serve', 'coveralls', 'transpile', 'watch']);
