module.exports = {
  pluginOptions: {
    s3Deploy: {
      assetPath: 'dist',
      bucket: 'sales-dashboard-locusnine',
      region: 'us-west-2',
      pwa: false,
      enableCloudfront: false,
      uploadConcurrency: 5
    }
  }
}
