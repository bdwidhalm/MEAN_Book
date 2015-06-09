var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var wrap = require('gulp-wrap');
var jshint = require('gulp-jshint');

gulp.task('css', function() {
  gulp.src('./assets/style/*.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(concat('main.min.css', {
      newLine: ''
    }))
    .pipe(gulp.dest('.public/css'));
});

var jsSource = './assets/javascript';
gulp.task('javascript', function() {
  return gulp.src([jsSource + 'mainapp.js',
  jsSource + 'edit_controller.js',
  jsSource + 'view_controller.js'])
    .pipe(concat('main.js'))
    .pipe(wrap('(function(a, window){<%= contents %>}(angular, window));'))
    .pipe(jshint({
      predef: ['window', 'angular']
    }))
    .pipe(jshint.reporter('default'))
    .pipe(gulp.dest('./public/javascript'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./public/javascript'));
});

gulp.task('watch', function() {
  gulp.watch('./assests/javascript/*.js', ['javascript']);
  gulp.watch('./assests/style/*.styl', ['css']);
});

gulp.task('default', function() {
  gulp.start('javascript');
  gulp.start('css');
});
