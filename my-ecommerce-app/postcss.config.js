// filepath: /C:/Users/Rohan/tpop/my-ecommerce-app/postcss.config.js
module.exports = {
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
      },
    },
    tailwindcss: {},
    autoprefixer: {},
  },
}