var gulp = require('gulp');

var sass = require('gulp-sass');

var cleanCss = require('gulp-clean-css');

var cssbeautify = require('gulp-cssbeautify');

var browserSync = require('browser-sync').create();

gulp.task('hello', function () {
  console.log('Hello');
});

gulp.task('css', function () {
  return gulp.src('app/css/**/*.css')
    .pipe(gulp.dest('app/css'))
    .pipe(cleanCss())
    .pipe(cssbeautify())
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('js', function () {
  return gulp.src('app/js/**/*.js')
    .pipe(gulp.dest('app/js'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('default', ['browserSync', 'css', 'js'], function () {
  gulp.watch('app/css/**/*.css', ['css']);
  gulp.watch('app/js/**/*.js', ['js']);
  gulp.watch('app/index.html', browserSync.reload);
});

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});
