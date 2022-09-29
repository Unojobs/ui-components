import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { theme as defaultTheme } from '../../theme';
import { custom } from '../../theme/custom';

export const appTheme = extendTheme(defaultTheme, custom);
export const AppProvider = ({ children, theme, ...props }: any) => {
  return (
    <NativeBaseProvider theme={extendTheme(appTheme, theme)} {...props}>
      {children}
    </NativeBaseProvider>
  );
};
