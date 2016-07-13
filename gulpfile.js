const gulp = require('gulp');
const pug = require('gulp-pug');
const scss = require('gulp-sass');
const babel = require('gulp-babel');
const watch = require('gulp-watch');


const paths = {
    babel_in: 'src/es6/index.js',
    scss_in: 'src/scss/main.scss',
    pug_in: 'src/views/*.pug'
}


// BABEL
gulp.task('compile-babel', () => {
	return gulp.src('src/es6/index.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('client'));
});

// SCSS
gulp.task('compile-scss', () => {
  return gulp.src('src/scss/main.scss')
    .pipe(scss())
    .pipe(gulp.dest('client'));
});

// PUG
gulp.task('compile-pug', () => {
  return gulp.src('src/views/*.pug')
  .pipe(pug())
    .pipe(gulp.dest('client'));
});



//////////////////////////

gulp.task('watch', ( ) => {
   gulp.watch(paths.babel_in, ['compile-babel']);
   gulp.watch(paths.scss_in, ['compile-scss']) 
   gulp.watch(paths.pug_in, ['compile-pug']) 
});




/////////////////////////


// // Rerun the task when a file changes
// gulp.task('watch', function() {
//   gulp.watch(paths.scripts, ['scripts']);
//   gulp.watch(paths.images, ['images']);
// });

// // The default task (called when you run `gulp` from cli)
// gulp.task('default', ['watch', 'scripts', 'images']);