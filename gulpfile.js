var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: __dirname,
    livereload: true
  });
});

gulp.task('watch', function () {
  gulp.watch(['*.*', 'modules/**/*.*'], function (event) {
    gulp.src(event.path)
      .pipe(connect.reload());
  });
});

gulp.task('default', ['connect', 'watch']);
