var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-ruby-sass'),
    replace = require('gulp-replace');
    

gulp.task('server', function(){
    browserSync.init({
        server: './src',
        notify: false
    });
    
    gulp.watch('src/css/*.scss', ['sass']);
    gulp.watch('src/js/*.js', function(event){
        browserSync.reload();
    });
    gulp.watch('src/*.html', function(event){
        browserSync.reload();
    });
    gulp.watch('src/img/*', function(event){
        browserSync.reload();
    });
    gulp.watch('src/css/images/*', function(event){
        browserSync.reload();
    });
});

gulp.task('sass', function(){
    return sass('src/css/*.scss')
        .on('error', sass.logError)
        .pipe(replace(/..\/..\//g, ''))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});














