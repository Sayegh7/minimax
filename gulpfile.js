var gulp = require('gulp');
var childProcess = require('child_process');
var electron = require('electron-prebuilt');
var gutil = require('gulp-util');

gulp.task('run', function(){
	childProcess.spawn(electron, ['.'], {stdio:'inherit'});
	return gutil.log('gluping');
});

