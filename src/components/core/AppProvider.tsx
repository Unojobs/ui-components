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

  return (
    <NativeBaseProvider
      theme={extendTheme(defaultTheme, custom, theme)}
      {...props}
    >
      {children}
    </NativeBaseProvider>
  );
};
