const gulp = require('gulp')
const { series, parallel } = require('gulp')

const before1 = callback => {

    console.log("Task Before 1")
    return callback()
}

const before2 = callback => {

    console.log("Task Before 2")
    return callback()
}

function copy(callback){
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    gulp.src('pastaA/**/**.txt')
    .pipe(gulp.dest('pastaB'))
    return callback()
}
const end = callback => {

    console.log("Task End 1")
    return callback()
}

module.exports.default = series(parallel(before1, before2), copy, end)

