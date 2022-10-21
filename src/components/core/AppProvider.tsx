import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { theme as defaultTheme } from '../../theme';
import { custom } from '../../theme/custom';
import {
  Urbanist_400Regular,
  Urbanist_500Medium,
  Urbanist_600SemiBold,
  Urbanist_700Bold,
} from '@expo-google-fonts/urbanist';
import { useFonts } from 'expo-font';

export const appTheme = extendTheme([defaultTheme, custom]);
export const AppProvider = ({ children, theme, ...props }: any) => {
  // Urbanist font configauration

  const [] = useFonts({
    Urbanist_400Regular,
    Urbanist_500Medium,
    Urbanist_600SemiBold,
    Urbanist_700Bold,
  });

  const fontConfig = {
    fontConfig: {
      Urbanist: {
        400: {
          normal: 'Urbanist_400Regular',
        },
        500: {
          normal: 'Urbanist_500Medium',
        },
        600: {
          normal: 'Urbanist_600SemiBold',
        },
        700: {
          normal: 'Urbanist_700Bold',
        },
      },
    },
    fonts: {
      heading: 'Urbanist',
      body: 'Urbanist',
      mono: 'Urbanist',
    },
  };

  return (
    <NativeBaseProvider
      theme={extendTheme(defaultTheme, custom, theme, fontConfig)}
      {...props}
    >
      {children}
    </NativeBaseProvider>
  );
};
