// next.config.js
const isProd = process.env.NODE_ENV === 'production'

const repoName = 'your-repo-name' // ← replace this!

module.exports = {
    output: 'export',
    basePath: isProd ? `/${repoName}` : '',
    assetPrefix: isProd ? `/${repoName}/` : '',
}
