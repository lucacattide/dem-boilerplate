'use strict';
// Inclusione Moduli
const gulp = require('gulp');
const banner = require('gulp-banner');
const pkg = require('./package.json');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const size = require('gulp-size');
// Dichiarazione Variabili
const comment = '<!--\n' +
  '<%= pkg.name %> <%= pkg.version %>\n' +
  '<%= pkg.description %>\n' +
  '<%= pkg.homepage %>\n' +
  '<%= pkg.author %>\n' +
  'Rilasciato sotto licenza <%= pkg.license %>.\n' +
  '-->\n';
// Tasks
// Immagini
gulp.task('img', () => {
  return gulp.src('./*')
    .pipe(imagemin())
    .pipe(gulp.dest('./'));
});
// Index
gulp.task('index', () => gulp.src('./*.html')
  .pipe(htmlmin({
    removeComments: true,
    collapseWhitespace: true,
  }))
  .pipe(size())
  .pipe(gulp.dest('./dist'))
);
// Banner
gulp.task('banner-index', () => {
  gulp.src('./dist/*.html')
    .pipe(banner(comment, {
      pkg: pkg,
    }))
    .pipe(gulp.dest('./dist'));
});
// Default
gulp.task('default', [
  'img',
]);
// Produzione
gulp.task('dist', [
  'index',
  'banner-index',
]);
