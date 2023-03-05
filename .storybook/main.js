module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react", 
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias['react-native$'] = 'react-native-web'

    return config
  },
  typescript: {
    check: true,
  }
}