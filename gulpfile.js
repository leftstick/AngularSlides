var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('default', function(cb) {
    connect.server({
        port: 8080,
        livereload: true
    });

    cb();
});