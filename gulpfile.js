var gulp = require('gulp');
var sass = require("gulp-sass");
var notify = require("gulp-notify");
var eslint = require("gulp-eslint");
var serve = require("gulp-serve");

const paths = {
  scssSrc: 'app/sass/**/*.scss',
  cssDist: 'dist/css/',
  jsSrc: 'app/js/**/*.js',
  jsDist: 'dist/js/**/*.js',
};

gulp.task('dev', ['watch', 'build', 'serve']);

gulp.task('watch', function() {
  gulp.watch([
    paths.scssSrc,
    paths.jsAppSrc
  ], ['lint', 'build']);
});

gulp.task('build', ['lint', 'generate-styles']);

gulp.task('generate-styles', function() {
  return gulp.src(paths.scssSrc)
    .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(paths.cssDist))
      .pipe(notify('SASS success :)'))
});

gulp.task('lint', function() {
    return gulp.src([
      paths.jsAppSrc,
      '!node_modules/**'
    ])
      .pipe(eslint())
      .pipe(eslint.format())
    .pipe(eslint.failAfterError())
});

gulp.task('serve', serve());
