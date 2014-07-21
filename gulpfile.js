var gulp     = require('gulp'),
    sassc    = require('gulp-sass'),
    sassruby = require('gulp-ruby-sass'),
    concat   = require('gulp-concat');


gulp.task('sassc', function(){
  gulp.src('src/stylesheets/**/*.scss')
    .pipe(sassc())
    .pipe(concat('application-sassc-gulp.css'))
    .pipe(gulp.dest('assets/stylesheets'));
});

gulp.task('sass-ruby', function(){
  gulp.src('src/stylesheets/**/*.scss')
    .pipe(sassruby({loadPath: 'src/stylesheets'}))
    .pipe(concat('application-sass-ruby.css'))
    .pipe(gulp.dest('assets/stylesheets'));
});
