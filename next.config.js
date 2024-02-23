/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: 'sass-loader',
          options: {
            // Добавьте параметры для sass-loader при необходимости
          },
        },
      ],
    });

    return config;
  },
  images: {
    domains: ['13.51.165.176'],
  },
};
