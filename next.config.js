// next.config.js
const { withContentlayer } = require('next-contentlayer')

module.exports = withContentlayer({
  reactStrictMode: true,
  pageExtensions: ['jsx', 'js', 'ts', 'tsx'],
  eslint: {
    dirs: ['pages', 'components'],
  }
})