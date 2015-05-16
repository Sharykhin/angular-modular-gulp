var gulp = require('gulp');
var concat = require('gulp-concat');
var gls = require('gulp-live-server');
var watch = require('gulp-watch');
var jsmin = require('gulp-jsmin');
var uglyfly = require('gulp-uglyfly');
var filelog = require('gulp-filelog');
var copy = require( 'gulp-contrib-copy' );

gulp.task('serve',['scripts.vendor','scripts.app','default_templates','modules_templates','watch'],function(){
	var server = gls.static('public');
	server.start();
	gulp.watch(['./app/**/*.js'],server.start);
});

gulp.task('watch',function(){
	watch('app/**/*.js',function(){		
		gulp.start('scripts.app');
		gulp.start('default_templates');
		gulp.start('modules_templates');
	});
});

gulp.task('log',function(){
	gulp.src('app/**/*.js')
		.pipe(filelog())
		.pipe(gulp.dest('./logs/'))
});

gulp.task('scripts.app',function(){
	return gulp.src('./app/**/*.js')
		.pipe(concat('app.js'))
		.pipe(jsmin())		
		.pipe(gulp.dest('./public/'));
});

gulp.task('scripts.vendor',function(){
	var source = [
		'public/vendor/angular/angular.js',		
		'public/vendor/angular-ui-router/release/angular-ui-router.js'
	];

	return gulp.src(source)
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest('./public/assets/js/'))
});


gulp.task('default_templates',function(){
	return gulp.src('./app/views/*.html')
		.pipe(copy({log:true}))
		.pipe(gulp.dest('./public/views/'));
	
});

gulp.task('modules_templates', function(){
	return gulp.src('./app/modules/**/*.html')
		.pipe(copy({log:true}))
		.pipe(gulp.dest('./public/modules/'));
});




