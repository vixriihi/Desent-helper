module.exports = {
  cacheId: 'DE-1',
  navigateFallback: '/index.html',
  stripPrefix: 'dist',
  root: 'dist/',
  maximumFileSizeToCacheInBytes: 4194304,
  staticFileGlobs: [
    'dist/index.html',
    'dist/**.js',
    'dist/**.css',
    'dist/assets/**.*'
  ],
  runtimeCaching: [
    {
      urlPattern: /\/assets\//,
      handler: 'fastest'
    }
  ]
};
