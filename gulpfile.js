var gulp = require('gulp');
var connect = require('gulp-connect');
var clean = require('gulp-clean');

gulp.task('default', function (cb) {

    gulp.watch([
        './index.html',
        './resources/**/*'
    ], function (event) {

        gulp.src([event.path]).pipe(connect.reload());

    });

    connect.server({
        port: 8080,
        livereload: true
    });

    cb();
});

gulp.task('clean', function () {
    return gulp.src('./build', {
            read: false
        })
        .pipe(clean({
            force: true
        }));
});


gulp.task('build', ['clean'], function (cb) {


    var NwBuilder = require('node-webkit-builder');
    var nw = new NwBuilder({
        files: ['./**/*', '!./node_modules/**/*', '!./introduction/**/*'],
        platforms: ['win'],
        version: 'v0.9.2'
    });

    // Log stuff you want
    nw.on('log', console.log);

    // Build retruns a promise
    nw.build().then(function () {
        console.log('all done!');
        cb();
    }).catch(function (error) {
        console.error(error);
        cb(error);
    });

    // And supports callbacks
    nw.build(function (err) {
        if (err) {
            console.log(err);
            cb(err);
        }
    });

});