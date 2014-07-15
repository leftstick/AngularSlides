var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('default', function(cb) {

    gulp.watch([
        './index.html',
        './resources/**/*'
    ], function(event) {

        gulp.src([event.path]).pipe(connect.reload());

    });

    connect.server({
        port: 8080,
        livereload: true
    });

    cb();
});