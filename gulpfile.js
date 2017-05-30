'use strict'

var babel = require('gulp-babel');
var del = require('del');
var gulp = require('gulp');
var runSequence = require('run-sequence');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var path = require('path');
var webpackConfig = require('./webpack.config.js');

var paths = {
  dist: 'dist',
  src: [
    'src/*.js',
    'src/index.html'
  ]
};

gulp.task('clean', function() {
  return del([paths.dist]);
});

gulp.task('modules', function() {
  var options = {};
  gulp.src(paths.src[0])
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest(paths.dist));

  gulp.src(paths.src[1])
    .pipe(gulp.dest(paths.dist));
});

gulp.task('default', function(cb) {
  runSequence('clean', 'modules', cb);
});
