import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { theme as defaultTheme } from '../../theme';
import { custom } from '../../theme/custom';
import {
  Urbanist_500Medium,
  // Urbanist_100Thin,
  // Urbanist_200ExtraLight,
  // Urbanist_300Light,
  // Urbanist_400Regular,
  // Urbanist_600SemiBold,
  // Urbanist_700Bold,
  // Urbanist_800ExtraBold,
  // Urbanist_900Black,
  // Urbanist_100Thin_Italic,
} from '@expo-google-fonts/urbanist';
import { useFonts } from 'expo-font';

export const appTheme = extendTheme([defaultTheme, custom]);
export const AppProvider = ({ children, theme, ...props }: any) => {
  // const [] = useFonts({
  //   Urbanist_500Medium,
  // });
  let [] = useFonts({ Urbanist_500Medium });

  const fontConfig = {
    fontConfig: {
      Urbanist: {
        200: {
          normal: 'Urbanist_500Medium',
        },
        300: {
          normal: 'Urbanist_700Bold',
        },
        // 900: {
        //   normal: 'Inter_900Black',
        // },
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
      theme={extendTheme(appTheme, theme, fontConfig)}
      {...props}
    >
      {children}
    </NativeBaseProvider>
  );
};
