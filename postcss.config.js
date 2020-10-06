/* eslint-disable */
const glob = require('glob-all');

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({
      stage: 2,
      features: {
        'custom-properties': {
          preserve: true,
          warnings: false,
        },
        'nesting-rules': true,
        'custom-media-queries': true,
      },
    }),
  ],
};
