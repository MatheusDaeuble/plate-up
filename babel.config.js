module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          alias: {
            assets: './src/assets',
            contexts: './src/contexts',
            designSystem: './src/designSystem',
            hoc: './src/hoc',
            routes: './src/routes',
            screens: './src/screens',
          },
        },
      ],
    ],
  };
};
