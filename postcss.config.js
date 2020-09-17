/* eslint-disable */
import glob from 'glob-all';

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
    ...(process.env.NODE_ENV === 'production'
      ? [
          require('@fullhuman/postcss-purgecss')({
            content: [
              './src/**/*.tsx',
              ...glob.sync('./src/**/*.js', { nodir: true }),
              ...glob.sync('./node_modules/antd/es/button/**/*.css', {
                nodir: true,
              }),
            ],
            extractors: [
              {
                extractor: (content) => content.match(/([a-zA-Z-]+)(?= {)/g) || [],
                extensions: ["css"],
              },
            ],
          }),
        ]
      : []),
  ],
};
