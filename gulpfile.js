"use strict";

// Load plugins
const autoprefixer = require("autoprefixer");
const browsersync = require("browser-sync").create();
const cp = require("child_process");
const cssnano = require("cssnano");
const del = require("del");
const eslint = require("gulp-eslint");
const gulp = require("gulp");
const newer = require("gulp-newer");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const webpack = require("webpack");
const webpackconfig = require("./webpack.config.js");
const webpackstream = require("webpack-stream");

// BrowserSync
function browserSync(done) {
    browsersync.init({
        proxy: "localhost/josecaos.xyz",
        options: {
            reloadDelay: 50
        },
        port: 3000
    });
    done();
}

// BrowserSync Reload
function browserSyncReload(done) {
    browsersync.reload();
    done();
}

// Clean assets
function clean() {
    return del(["./public/"]);
}

// CSS task
function css() {
    return gulp
        .src("./scss/**/*.scss")
        .pipe(plumber())
        .pipe(sass({ outputStyle: "expanded" }))
        .pipe(gulp.dest("./public/css/"))
        .pipe(rename({ suffix: ".min" }))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(gulp.dest("./public/css/"))
        .pipe(browsersync.stream());
}

// Lint scripts
function scriptsLint() {
    return gulp
        .src(["./js/**/*", "./gulpfile.js"])
        .pipe(plumber())
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}

// Transpile, concatenate and minify scripts
function scripts() {
    return (
        gulp
        .src(["./js/**/*"])
        .pipe(plumber())
        .pipe(webpackstream(webpackconfig, webpack))
        // folder only, filename is specified in webpack config
        .pipe(gulp.dest("./public/js/"))
        .pipe(browsersync.stream())
    );
}

// Watch files
function watchFiles() {
    gulp.watch("./scss/**/*", css);
    gulp.watch("./js/**/*", gulp.series(scriptsLint, scripts));
}

// define complex tasks
const js = gulp.series(scriptsLint, scripts);
const build = gulp.series(clean, gulp.parallel(css, js));
const watch = gulp.parallel(watchFiles, build, browserSync);

// export tasks
exports.css = css;
exports.js = js;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = build;
