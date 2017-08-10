var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    stylus = require('gulp-stylus'),
    rename = require('gulp-rename'),
    inject = require('gulp-inject'),
    plumber = require('gulp-plumber')
    debug = require('gulp-debug');


gulp.task('minify-scripts', function(){
    gulp.src('client/**/*.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('public'));
});

gulp.task('styles', function(){
    gulp.src('client/*.styl')
        .pipe(plumber())
        .pipe(stylus())
        .pipe(gulp.dest("client/"));
});

gulp.task('inject-js', function(){
    gulp.src('client/Index.html')
        .pipe(debug())
        .pipe(inject(gulp.src(['client/**/*.js', '!client/route.config.js', '!client/app.js'], {read: false})))
        // .pipe(inject(gulp.src('client/route.config.js', {read: false})))
        // .pipe(inject(gulp.src('client/app.js', {read: false})))
        .pipe(gulp.dest('./dest'));
})

gulp.task('minify', ['minify-scripts']);

gulp.task('watch', function(){
    gulp.watch('client/**/*.js', ['minify']);
});

gulp.task('default', ['minify', 'styles']);