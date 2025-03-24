// next.config.js
const isProd = process.env.NODE_ENV === 'production'

const repoName = 'history-midterm' // ← replace this!

module.exports = {
    output: 'export',
    basePath: isProd ? '/history-midterm' : '',
    assetPrefix: isProd ? '/history-midterm/' : '',
}
