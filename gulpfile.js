var gulp = require('gulp');
var connect = require('gulp-connect');
var clean = require('gulp-clean');
var inquirer = require("inquirer");

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

gulp.task('clean', function() {
    return gulp.src('./build', {
        read: false
    })
    .pipe(clean({
        force: true
    }));
});


gulp.task('build', ['clean'], function(cb) {

    inquirer.prompt([{
            type: 'checkbox',
            name: 'platforms',
            message: 'Choose platforms you want to generate for',
            default: ['win'],
            choices: ['win', 'osx', 'linux32', 'linux64'],
            validate: function(input) {
                if (!input || input.length === 0) {
                    return 'You have to choose at least one platform';
                }
                return true;
            }
        }], function(answer) {

        var NwBuilder = require('node-webkit-builder');
        var nw = new NwBuilder({
            files: ['./index.html',
                './package.json',
                './core/**/*',
                './extensions/**/*',
                './res/**/*',
                './themes/**/*'],
            platforms: answer.platforms,
            version: 'v0.9.2'
        });

        // Log stuff you want
        nw.on('log', console.log);

        // Build retruns a promise
        nw.build().then(function() {
                console.log('all done!');
                cb();
            }).catch(function(error) {
            console.error(error);
            cb(error);
        });

    });

});