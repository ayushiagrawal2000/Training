var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');
var injectPartials = require('gulp-inject-partials');

gulp.task('prepareHtml', function () {
  return gulp.src('./app/templates/*.html')
           .pipe(injectPartials({removeTags: true}))
           .pipe(gulp.dest('./app/output/'))
});
 
gulp.task('progressBar', function () {
    return gulp.src('./app/templates/partials/_header.html')
            .pipe(injectPartials())
            .pipe(gulp.dest('./app/templates/partials'))
});

gulp.task('sass', function(done) {
    gulp.src('./scss/style.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./app/output/css/'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./app/output/css/'))
        .on('end', done);
});
gulp.task('scss', function(done) {
    runSequence("sass", "progressBar", "prepareHtml", done);
});

gulp.task('default', ['scss']);
