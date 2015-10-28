var gulp = require('gulp');
var htmlreplace = require('gulp-html-replace');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var streamify = require('gulp-streamify');
var child = require('child_process');
var fs = require('fs');
var debug = require('gulp-debug');
var gutil = require('gulp-util');

var path = {
  COPY: ['src/index.html', 'src/css/style.css'],
  MINIFIED_OUT: 'build.min.js',
  OUT: 'build.js',
  DEST: 'dist',
  DEST_BUILD: 'dist/build',
  DEST_SRC: 'dist/src',
  ENTRY_POINT: './src/js/main.js'
};

gulp.task('copy', function(){
  gulp.src(path.COPY)
    .pipe(gulp.dest(path.DEST));
});

var watcher = undefined;
function get_watcher(){
  if(watcher) return watcher
  watcher = watchify(browserify({
    entries: [path.ENTRY_POINT],
    transform: [reactify],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  }));
  watcher.on('log', gutil.log);
  return watcher;
}

function bundle(){
  return get_watcher().bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      //.pipe(debug({title: 'unicorn:'}))
      .pipe(source(path.OUT))
      .pipe(gulp.dest(path.DEST_SRC))
}

gulp.task('bundle', bundle)

gulp.task('watch', function() {
  gulp.watch(path.COPY, ['copy']);

  return get_watcher().on('update', bundle)

});

gulp.task('server', function() {
  var server = child.spawn('python', ['-m', 'SimpleHTTPServer']);
  var log = fs.createWriteStream('/tmp/server.log', {flags: 'a'});
  server.stdout.pipe(log);
  server.stderr.pipe(log);
});

gulp.task('default', ['watch', 'copy', 'bundle', 'server']);
