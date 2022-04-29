const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyle() {
  return src("app/**/*.scss").pipe(sass()).pipe(dest("css"));
}

function watchTask() {
  watch(["app/**/*.scss"], buildStyle);
}

exports.default = series(buildStyle, watchTask);
