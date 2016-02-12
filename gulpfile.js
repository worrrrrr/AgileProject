var gulp = require('gulp');
var browserSync = require('browser-sync')
var nodemon = require('gulp-nodemon');
var exec = require('child_process').exec;

// process JS files and return the stream.
gulp.task('js', function () {
    return gulp.src('js/*js')
       
});

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', ['js'], browserSync.reload);

// use default task to launch Browsersync and watch JS files
gulp.task('serve', ['js','nodemon','startServer'], function () {

    // Serve files from the root of this project
 		browserSync.init(null, {
		proxy: "http://localhost:3000",
        files: ["public/**/*.*"],
        browser: "google chrome",
     	
	});

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("js/*.js", ['js-watch']);
});

gulp.task('nodemon', function (cb) {
	var started = false;
	return nodemon({
		script: 'index.js'
	}).on('start', function () {
		if (!started) {
			cb();
			started = true; 
		} 
	});
});


gulp.task('startServer', function(){
    exec('ionic serve', function (err, stdout, stderr) {});
});	