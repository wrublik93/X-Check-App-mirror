/* eslint-disable */
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
            content: ['./src/**/*.tsx'],
            defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
          }),
        ]
      : []),
  ],
};
