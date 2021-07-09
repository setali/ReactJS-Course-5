const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
module.exports = withBundleAnalyzer()

module.exports = (phase, { defaultConfig }) => {
  console.log(phase)
  return withBundleAnalyzer({
    env: {
      myName: phase === PHASE_DEVELOPMENT_SERVER ? 'Ali' : 'Qoli'
    }
  })
}
