var gulp = require('gulp');
var htmlreplace = require('gulp-html-replace');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var streamify = require('gulp-streamify');
var child = require('child_process');
var fs = require('fs');
var debug = require('gulp-debug');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var reactify = require('reactify')

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

var external_libs = ['react', 'react-dom', 'react-router', 'history', 'history/lib/createBrowserHistory', 'redux', 'react-redux', 'redux-thunk'];

function _bundle(b){
 return b.bundle()
   .on('error', function(error) {
      gutil.log(error.stack, gutil.colors.red(error.message));
      this.emit('end');})
   //.pipe(debug({title: 'unicorn:'}))
}

function bundle_libs(){
  var b = browserify({
    debug: true//no source maps
  });
  external_libs.forEach(function(lib) {
    b.require(lib);
  });
  _bundle(b)
   .pipe(source(path.LIBS_OUT))
   //.pipe(streamify(uglify()))
   .pipe(gulp.dest(path.DEST_SRC))
}


function get_app_browserify(){
  return browserify({
    entries: [path.ENTRY_POINT],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  })
  .transform("babelify", {presets: ["es2015", "react"]})
  .external(external_libs);
  //.exclude('react)'
}

var watcher = undefined;
function get_watcher(){
  if(watcher) return watcher
  watcher = get_app_browserify()
    .plugin(watchify)
    .on('log', function (msg) {gutil.log(gutil.colors.green(msg))})
  return watcher;
}

function _bundle_app(b){
  _bundle(b)
   .pipe(source(path.OUT))
   //.pipe(streamify(uglify()))
   .pipe(gulp.dest(path.DEST_SRC))
}

function incremental_app_bundle(){
  gutil.log("incremental_bundle")
  _bundle_app(get_watcher())
}

function full_app_bundle(){
  _bundle_app(get_app_browserify())
}

gulp.task('bundle-app', full_app_bundle)

gulp.task('bundle-libs', bundle_libs)

gulp.task('bundle', ['bundle-app', 'bundle-libs'])

gulp.task('watch', function() {
  gulp.watch(path.COPY, ['copy']);
  copy() //copy at start

  get_watcher().on('update', incremental_app_bundle)
  // start the watchify bundler, first time, otherwise no updates are sent
  incremental_app_bundle()
});

gulp.task('python-server', function() {
  var server = child.spawn('python', ['-m', 'SimpleHTTPServer']);
  gutil.log("Starting server @ localhost:8000")
  var log = fs.createWriteStream('/tmp/server.log', {flags: 'a'});
  server.stdout.pipe(log);
  server.stderr.pipe(log);
});

gulp.task('server', function() {
  connect.server({
    root: 'dist',
    livereload: true //somewhoe not working?
  });
});

gulp.task('default', ['watch',  'server']);
