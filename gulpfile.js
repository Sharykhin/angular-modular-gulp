var gulp = require('gulp');
var concat = require('gulp-concat');
var gls = require('gulp-live-server');
var watch = require('gulp-watch');

gulp.task('serve',['watch'],function(){
	var server = gls.static('public');
	server.start();
	gulp.watch(['./app/**/*.js'],server.start);
});

gulp.task('watch',function(){
	watch('app/**/*.js',function(){
		gulp.start('scripts.app');
	});
});

gulp.task('scripts.app',function(){
	return gulp.src('./app/**/*.js')
		.pipe(concat('app.js'))
		.pipe(gulp.dest('./public/'));
});


