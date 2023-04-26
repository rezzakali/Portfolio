module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.(pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'pdfs/',
            },
          },
        ],
      },
    ],
  },
};
