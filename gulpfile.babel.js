import gulp from 'gulp';
import babel from 'gulp-babel';
import server from 'gulp-nodemon';
import gulpWatch from 'gulp-watch';
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

 // implementing run-tests task
gulp.task('run-tests', ['pre-test'], () => {
  gulp.src('test/inverted-index-test.js')
 .pipe(babel({
   presets: ['es2015'],
 }))
 .pipe(injectModules())
 // using jasmine-node to run test assertions
 .pipe(jasmineNode({
   timeout: 10000,
   includeStackTrace: true,
   color: true
 }))
 .pipe(istanbul.writeReports());
});

// Test Coverage: sends report to coverage folder
gulp.task('coverage', ['run-tests'], () => {
  gulp.src('coverage/lcov.info')
 .pipe(coveralls());
});

// Runs server
gulp.task('serve', () => {
  server({
    script: 'dist/app.js',
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

gulp.task('start', ['serve'], () => {
  gulp.src(['src/routes.js'])
  .pipe(gulpWatch());
});


gulp.task('default', ['pre-test', 'test', 'coverage', 'serve', 'transpile', 'watch']);
