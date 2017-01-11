var gulp = require('gulp');
var bower = require('gulp-bower');
var sass = require('gulp-sass');
 
gulp.task('bower', function() {
  return bower({ directory: './lib' })
});

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});