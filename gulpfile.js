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
var uglify = require('gulp-uglify');

var path = {
  COPY: ['src/index.html', 'src/css/style.css'],
  MINIFIED_OUT: 'build.min.js',
  OUT: 'build.js',
  LIBS_OUT: 'libs.js',
  DEST: 'dist',
  DEST_SRC: 'dist/src',
  ENTRY_POINT: './src/js/main.js'
};

function copy(){
  gulp.src(path.COPY)
    .pipe(gulp.dest(path.DEST));
}
gulp.task('copy', copy);

var external_libs = ['react', 'react-dom', 'react-router', 'history', 'history/lib/createBrowserHistory'];

function bundle_libs(){
  var b = browserify({
    debug: false//no source maps
  });
  external_libs.forEach(function(lib) {
    b.require(lib);
  });
  b.bundle()
   .on('error', gutil.log.bind(gutil, 'Browserify Error'))
   .on('log', gutil.log)
   //.pipe(debug({title: 'unicorn:'}))
   .pipe(source(path.LIBS_OUT))
   .pipe(streamify(uglify()))
   .pipe(gulp.dest(path.DEST_SRC))
}

function get_browserify(){
  return browserify({
    entries: [path.ENTRY_POINT],
    transform: [reactify],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  }).external(external_libs);
  //.exclude('react)'
}

var watcher = undefined;
function get_watcher(){
  if(watcher) return watcher
  watcher = get_browserify()
      .plugin(watchify)
  return watcher;
}

function _bundle(b){
  b.bundle()
  .on('error', gutil.log.bind(gutil, 'Browserify Error'))
  .on('log', gutil.log)
  //.pipe(debug({title: 'unicorn:'}))
  .pipe(source(path.OUT))
  .pipe(gulp.dest(path.DEST_SRC))
}

function incremental_bundle(){
  gutil.log("incremental_bundle")
  _bundle(get_watcher())
}

function full_bundle(){
  _bundle(get_browserify())
}

gulp.task('bundle-app', full_bundle)

gulp.task('bundle-libs', bundle_libs)

gulp.task('bundle', ['bundle-app', 'bundle-libs'])

gulp.task('watch', function() {
  gulp.watch(path.COPY, ['copy']);
  copy() //copy at start

  get_watcher().on('update', incremental_bundle)
  // start the watchify bundler, first time, otherwise no updates are sent
  incremental_bundle()
});

gulp.task('server', function() {
  var server = child.spawn('python', ['-m', 'SimpleHTTPServer']);
  gutil.log("Starting server @ localhost:8000")
  var log = fs.createWriteStream('/tmp/server.log', {flags: 'a'});
  server.stdout.pipe(log);
  server.stderr.pipe(log);
});

gulp.task('default', ['watch',  'server']);
