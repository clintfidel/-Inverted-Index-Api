'use strict';

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpBabel = require('gulp-babel');

var _gulpBabel2 = _interopRequireDefault(_gulpBabel);

var _jasmine = require('jasmine');

var _jasmine2 = _interopRequireDefault(_jasmine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * transpiles code ending with the suffix (.js)
 */
_gulp2.default.task('transpile', function () {
  _gulp2.default.src(['./src/*.js', './tests/*.js', './*.js']).pipe((0, _gulpBabel2.default)({
    presets: ['es2015']
  })).pipe(_gulp2.default.dest('./dist'));
});
/**
 * run tests using jasmine
 */

// import instabul from 'gulp-istanbul-report';
_gulp2.default.task('run-test', ['transpile'], function () {
  _gulp2.default.src(['test/inverted-index-test.js']).pipe((0, _jasmine2.default)());
});
_gulp2.default.task('default', ['transpile', 'test']);