const child = require('child_process');
const browserSync = require('browser-sync').create();

const gulp = require('gulp');
const concat = require('gulp-concat');
const gutil = require('gulp-util');
const sass = require('gulp-sass');
const include = require("gulp-include");

const siteRoot = '_site';
const cssFiles = '_css/**/*.?(s)css';
const jsFiles = 'js/*.js';

gulp.task("scripts", function() {
   gulp.src("js/app.js")
    .pipe(include())
      .on('error', console.log)
    .pipe(gulp.dest("_site/js"));
});

gulp.task('css', () => {
  gulp.src(cssFiles)
    .pipe(sass({includePaths: ['./_sass']}))
    .pipe(concat('all.css'))
    .pipe(include({
    extensions: "css",
    hardFail: true,
    includePaths: [
      __dirname + "/node_modules"
     // __dirname + "/src/js"
    ]
  }))
    .pipe(gulp.dest('css'));
});

gulp.task('jekyll', () => {
  const jekyll = child.spawn('jekyll', ['build',
    '--watch',
    '--incremental',
    '--drafts'
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('serve', () => {
  browserSync.init({
    files: [siteRoot + '/**'],
    port: 4000,
    server: {
      baseDir: siteRoot
    }
  });

  gulp.watch(cssFiles, ['css']);
  //gulp.watch(jsFiles, ['scripts']);
});

gulp.task('default', ['css', 'scripts', 'jekyll', 'serve']);
