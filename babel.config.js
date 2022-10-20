module.exports = {
  presets: ['module:metro-react-native-babel-preset', 'react-native'],
  plugins:
    process.env.NODE_ENV === 'production' ? ['transform-remove-console'] : [],
};
