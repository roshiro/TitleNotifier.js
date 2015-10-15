'use strict';

var gulp = require('gulp'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify'),
  jasmine = require('gulp-jasmine-livereload-task');

var DEST = 'dist/';

/*
  Javascript Minifier
*/
gulp.task('uglify', () => {
  return gulp.src('src/title_notifier.js')
    // This will output the non-minified version
    .pipe(gulp.dest(DEST))
    // This will minify and rename to title_notifier.min.js
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest(DEST));
});

/*
  Javascript Tester
*/
gulp.task('test', jasmine({
  files: ['src/title_notifier.js', 'test/title_notifier.js']
}));

gulp.task('default', ['uglify', 'test']);