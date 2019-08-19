var gulp = require("gulp"),
  sass = require("gulp-sass"),
  uglify = require("gulp-uglify"),
  concat = require("gulp-concat"),
  browserSync = require("browser-sync"),
  sourcemaps = require("gulp-sourcemaps"),
  reload = browserSync.reload;

gulp.task("scripts", function() {
  return (
    gulp
      .src("src/js/*.js")
      .pipe(sourcemaps.init())
      .pipe(concat("app.min.js"))
      //.pipe(uglify())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest("./build/js/"))
  );
});

gulp.task("styles", function() {
  return gulp
    .src("src/sass/styles.scss", { allowEmpty: true })
    .pipe(sass.sync({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("./build/css/styles.css"))
    .pipe(reload({ stream: true }));
});

gulp.task("html", () => {
  return gulp
    .src("src/**/*.html", { allowEmpty: true })
    .pipe(gulp.dest("build/"));
});

gulp.task("assets", () => {
  return gulp.src("src/**/*").pipe(gulp.dest("build/"));
});

//Watches changes
gulp.task("watch", function() {
  gulp
    .watch("src/js/*.js")
    .on("change", gulp.parallel(["scripts", browserSync.reload]));
  gulp.watch("src/sass/*.scss").on("change", gulp.parallel(["styles"]));
  gulp
    .watch("src/**/*.html")
    .on("change", gulp.parallel(["html", browserSync.reload]));
  gulp
    .watch("src/assets/**/*")
    .on("change", gulp.parallel(["assets", browserSync.reload]));
});

gulp.task("browser-sync", function() {
  return browserSync.init({
    server: {
      baseDir: "./build",
      index: "index.html",
      stream: true
    }
  });
});

gulp.task(
  "default",
  gulp.parallel([
    "scripts",
    "styles",
    "assets",
    "html",
    "watch",
    "browser-sync"
  ])
);
