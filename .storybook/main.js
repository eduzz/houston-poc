module.exports = {
  presets: [{
    name: 'storybook-addon-deps/preset',
    options: {
      exclude: /^@babel/
    }
  }],
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.tsx', '../src/**/*.stories.ts'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-actions',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
    //'storybook-addon-material-ui/register'
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      }
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
