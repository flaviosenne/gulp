const gulp = require('gulp')
const {series, parallel} = require('gulp')

const { appCSS, appHtml, appImg, appJS} = require('./gulpTasks/app')
const { depsCSS, depsFonts} = require('./gulpTasks/deps')
const { server, watchFile} = require('./gulpTasks/server')


module.exports.default = series(
    parallel(
        series(appHtml, appCSS, appJS, appImg),
        series(depsCSS,depsFonts)
    ),
    server,
    watchFile
)
