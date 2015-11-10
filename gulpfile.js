var gulp = require('gulp'),
  connect = require('gulp-connect');
 
gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  });
});
 
gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});
 
gulp.task('js', function () {
  connect.reload();
});
 
gulp.task('watch', function () {
  gulp.watch(['./*.html'], ['html']);
  gulp.watch(['./js/*.js', './*.js'], ['js']);
});
 
gulp.task('default', ['connect', 'watch']);