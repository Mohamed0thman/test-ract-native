import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  // Error
  error: 'rgba(246, 86, 93, 1)',
  error80: 'rgba(246, 86, 93, 0.8)',
  error60: 'rgba(246, 86, 93, 0.6)',
  error20: 'rgba(246, 86, 93, 0.2)',
  error08: 'rgba(246, 86, 93, 0.08)',

  // Primary
  primary: '#4CA6A8',

  // Success
  success: 'rgba(253, 212, 70, 1)',
  success80: 'rgba(253, 212, 70, 0.8)',
  success60: 'rgba(253, 212, 70, 0.6)',
  success20: 'rgba(253, 212, 70, 0.2)',
  success08: 'rgba(253, 212, 70, 0.08)',

  // Dark
  dark: '#1A1D1E',

  // Grey
  grey: '#A8A8AA',

  //Dark Grey
  darkGrey: '#6A6A6A',

  // Light Grey
  lightGrey: 'rgba(247, 247, 247, 1)',

  // Light
  light: '#FBFBFB',

  //white
  white: '#fff',

  // Shadow
  shadow: 'rgba(138, 149, 158, 1)',
  shadow08: 'rgba(138, 149, 158, 0.08)',
};

export const SIZES = {
  // global sizes
  base: 10,
  font: 14,
  radius: 12,
  padding: 20,
  margin: 40,

  // font sizes
  largeTitle: 34,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 16,
  h5: 12,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {fontFamily: 'Poppins-Black', fontSize: SIZES.largeTitle},
  h1: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: SIZES.h1,
    lineHeight: 34,
  },
  h2: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.h2,
    lineHeight: 30,
  },
  h3: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.h3,
    lineHeight: 22,
  },
  h4: {
    fontFamily: 'Poppins-Medium',
    fontSize: SIZES.h4,
    lineHeight: 20,
  },
  h5: {
    fontFamily: 'Poppins-Medium',
    fontSize: SIZES.h5,
    lineHeight: 16,
  },
  body1: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body1,
    lineHeight: 34,
  },
  body2: {
    fontFamily: 'Poppins-Regular',

    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
