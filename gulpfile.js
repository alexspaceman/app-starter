var gulp = require('gulp')
var concat = require('gulp-concat')
var babel = require('gulp-babel')
var plumber = require('gulp-plumber')


gulp.task('server', function() {
  gulp.src('./server.js')
  .pipe(plumber())
  .pipe(babel())
  .pipe(concat('server.build.js'))
  .pipe(gulp.dest('./'))
})

gulp.task('watch', function() {
  gulp.watch('./server.js', ['server'])
})


gulp.task('default', ['server', 'watch'])