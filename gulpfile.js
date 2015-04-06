var gulp = require('gulp');
var concat = require('gulp-concat');
var gls = require('gulp-live-server');
var watch = require('gulp-watch');
var jsmin = require('gulp-jsmin');
var uglyfly = require('gulp-uglyfly')

gulp.task('serve',['scripts.vendor','watch'],function(){
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
		.pipe(jsmin())
		.pipe(uglyfly())		
		.pipe(gulp.dest('./public/'));
});

gulp.task('scripts.vendor',function(){
	var source = [
		'public/vendor/angular/angular.js',		
		'public/vendor/angular-ui-router/release/angular-ui-router.min.js'
	];

	return gulp.src(source)
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest('./public/assets/js/'))
});


