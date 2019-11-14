/* File: gulpfile.js */
// grab our gulp packages (must be defined in package.json)
var gulp  = require('gulp'),
     gclean = require('gulp-clean'),
     gsass = require('gulp-sass'),
     gforeach = require('gulp-foreach'),
     gtslint = require('gulp-tslint'),
     glog = require('fancy-log'),
     gprefix = require('gulp-autoprefixer'),
     gminifyCSS = require('gulp-minify-css'),
     gnotify = require('gulp-notify'),
     gtypescript = require('gulp-typescript');

//Define variables for use in the script
// let paths = {
//     dist: './dist',
//     source: './src',
//     styles: './src/styles'
// };

// create a default task and just log a message
gulp.task('default', async function() {
  return glog('Gulp is starting!');
});


//Convert sass to css
gulp.task('create-styles', async function () {
  var result = gulp.src('./src/styles/*.scss')
        .pipe(foreach(stream, file){
            let n =path.base
        })
        .pipe(gsass().on('error', gsass.logError))
        .pipe(gprefix("last 1 version"))
        .pipe(gminifyCSS())
        .pipe(gulp.dest('./dist/styles/'))
        .pipe(gnotify({ message: 'SASS are converted successfully to css' }));
      return result;
    });

//Clean the 'dist' path
// gulp.task('clean-dist', function () {
//   return gulp.src([paths.dist], {read:false})
//               .pipe(clean());
// });

//watch TS files
// gulp.task('watch-files', function() {
//   gulp.watch('./src/*.ts', ['typescriptit']);
// });

// gulp.task('typescriptit', function() {
//   return gulp.src('./src/*.ts')
//         .pipe(typescript())
//         .pipe(gulp.dest('./dist'));
// });

//Running the compiler
// gulp.task('build:dev', function () {
//   return run('tsc').exec();
// });


// define the default task and add the watch task to it
// gulp.task('default', ['watch']);

// configure the jshint task
// gulp.task('jshint', function() {
//   return gulp.src('dest/*.js')
//     .pipe(jshint())
//     .pipe(jshint.reporter('jshint-stylish'));
// });
