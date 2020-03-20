const { src, dest } = require('gulp');
var gulp = require('gulp');
var sass = require('gulp-sass');
var log = require('fancy-log');
var zip = require('gulp-zip');

var sassMain = ['sass/*.scss'];

gulp.task('sass', function (done) {
    gulp.src(sassMain) 
        .pipe(sass({
            outputStyle: 'compressed' 
        })
            .on('error', log.error)) 
        .pipe(gulp.dest('assets/css'))
    done()
});

gulp.task('watch', function () {
    gulp.watch('sass/*.scss', gulp.series('sass'));
});

gulp.task('zip', function (done) {
    const targetDir = 'dist/';
    const themeName = require('C:/Users/Agang Dut/Documents/GitHub/diaspora/newghoststuff/content/themes/diaspora/package.json').name;
    const filename = themeName + '.zip';

    gulp.src([
        '**',
        '!node_modules', '!node_modules/**',
        '!dist', '!dist/**'
    ])
        .pipe(zip(filename))
        .pipe(gulp.dest(targetDir));
        done();
});