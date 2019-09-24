"use strict";

var config = require('./config.json');

var gulp = require('gulp');
var concatCSS = require('gulp-concat-css');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var unCSS = require('gulp-uncss');
var notify = require('gulp-notify');
var sourcemaps = require('gulp-sourcemaps');
var connect = require('gulp-connect');
var prefixer = require('gulp-autoprefixer');
var open = require('gulp-open');
var pug = require('gulp-pug');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var prettify = require('gulp-prettify');
var clean = require('gulp-clean');
var sass  = require('gulp-sass');

sass.compiler = require('node-sass');

var errorLog = function (error) {
  console.error(error.toString());
  this.emit('end');
};

gulp.task('connect', function() {
  connect.server({
  root: 'dist',
  livereload: true
  });
  var options = {
  uri: 'http://localhost:8080',
  app: 'chrome'
  };
  gulp.src(config.dist + 'index.html')
  .pipe(open(options));
});

gulp.task('clean', function () {
  return gulp.src(config.dist, {read: false})
    .pipe(clean());
});

gulp.task('scss', function () {
  return gulp.src(config.scss)
    .pipe(sass.sync({
       emitCompileError: true,
       sourcemap: true,
       outputStyle: 'expanded'
    })
    .on('error', notify.onError("Task SCSS Error: <%= error.message %>")))
    .pipe(sourcemaps.init())
    .pipe(prefixer({
      browsers: ["last 50 version", "> 1%"],
      cascade: true
    }))
    .pipe(notify('Task SCSS Complete!'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dist + 'css/'))
    .pipe(connect.reload());
});

gulp.task('html', function() {
  gulp.src('src/index.html')
  .pipe(gulp.dest(config.dist))
  .pipe(notify('Task HTML Complete!'))
    .pipe(connect.reload());
});

gulp.task('views', function () {
  return gulp.src(config.pug)
    .pipe(pug())
    .on('error', function(err){
      gutil.log(gutil.colors.red(err))
    })
    .pipe(prettify({
      indent_size: 1,
      indent_inner_html: true,
      indent_char: '  ',
      preserve_newlines: true,
      max_preserve_newlines: 0,
      unformatted: true,
      end_with_newline: false
    }))
    // .pipe(notify('Task PUG Complete!'))
    .pipe(gulp.dest(config.dist))
    .pipe(connect.reload());
});

gulp.task('js', function(){
  gulp.src(config.js)
  .pipe(gulp.dest(config.dist + 'js/'))
  .pipe(connect.reload());
});

gulp.task('images', function(){
  gulp.src(config.images)
  .pipe(gulp.dest(config.dist + 'images/'))
  .pipe(connect.reload());
});

gulp.task('fonts', function(){
  gulp.src(config.fonts)
  .pipe(gulp.dest(config.dist + 'fonts/'))
  .pipe(connect.reload());
});

gulp.task('main_js', function(){
  gulp.src('./src/js/main.js')
  .pipe(gulp.dest(config.dist + 'js/'));
});


gulp.task('watch', function() {
  gulp.watch('src/scss/**/*.scss', ['scss']);
  gulp.watch('src/views/**/*.pug', ['views']);
  gulp.watch('src/js/**/*.js', ['js']);
  gulp.watch('src/images/**/**', ['images']);
  gulp.watch('src/fonts/**/**', ['fonts']);
});

//default
gulp.task('default', ['connect', 'images', 'js', 'fonts',  'scss',  'views',  'watch']);

