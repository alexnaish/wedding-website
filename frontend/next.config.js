const withOffline = require('next-offline');
const withSass = require('@zeit/next-sass');

const config = {
  target: 'serverless',
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /.jpg$/,
        handler: 'CacheFirst'
      },
      {
        urlPattern: /.jpeg$/,
        handler: 'CacheFirst'
      }
    ],
	},
	env: {
    SENTRY_DSN: process.env.SENTRY_DSN
  }
};

module.exports = withOffline(withSass(config));
