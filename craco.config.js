const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      return {
        ...webpackConfig,
        entry: {
          login: path.resolve(__dirname, 'src/login-entry.tsx'),
          user: path.resolve(__dirname, 'src/user-entry.tsx'),
          'create-user': path.resolve(__dirname, 'src/create-user-entry.tsx'),
        },
        output: {
          filename: '[name].js',
          path: path.resolve(__dirname, 'public'),
        },
      };
    },
  },
};
