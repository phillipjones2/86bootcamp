const gulp = require('gulp');
const pug = require('gulp-pug');
const scss = require('gulp-sass');
const babel = require('gulp-babel');
const watch = require('gulp-watch');


const paths = {
    babel_in: 'src/es6/index.js',
    scss_in: 'src/scss/main.scss',
    scss_all: 'src/scss/**/*.scss',
    pug_in: 'src/views/*.pug',
    pug_all: 'src/**/*.pug'
}


// BABEL
gulp.task('compile-babel', () => {
	return gulp.src(paths.babel_in)
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('client'));
});

// SCSS
gulp.task('compile-scss', () => {
  return gulp.src(paths.scss_in)
    .pipe(scss())
    .pipe(gulp.dest('client'));
});

// PUG
gulp.task('compile-pug', () => {
  return gulp.src(paths.pug_in)
  .pipe(pug({
    pretty: true
  }))
    .pipe(gulp.dest('client'));
});



//////////////////////////

gulp.task('watch', ( ) => {
   gulp.watch(paths.babel_in, ['compile-babel']);
   gulp.watch(paths.scss_all, ['compile-scss'])
   gulp.watch(paths.pug_all, ['compile-pug'])
});
