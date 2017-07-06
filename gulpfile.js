var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');


gulp.task('minify-scripts', function(){
    gulp.src('client/**/*.js')
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('public'));
});

gulp.task('minify', ['minify-scripts']);

gulp.task('default', ['minify']);