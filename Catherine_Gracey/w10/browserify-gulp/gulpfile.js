const gulp = require('gulp');
const babel = require('gulp-babel');
const browserify = require('browserify');
const connect = require('gulp-connect');
const rename = require('gulp-rename');
const source = require('vinyl-source-stream');
const streamify = require('gulp-streamify');
const uglify = require('gulp-uglify');
// const transform = require('vinyl-transform');

gulp.task('browserify', function() {
  var bundleStream = browserify('./app.js').bundle();
  bundleStream
    .pipe(source('app.js'))
    .pipe(babel())
    .pipe(streamify(uglify()))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('.'));
});

gulp.task('watch', function(){
  gulp.watch(['app.js'], ['browserify']);
});

gulp.task('server', function(){
  connect.server();
});

gulp.task('default', ['watch', 'server']);
