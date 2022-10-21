import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { theme as defaultTheme } from '../../theme';
import { custom } from '../../theme/custom';
import merge from 'lodash.merge';
export const appTheme = extendTheme(merge(defaultTheme, custom));
type MyThemeType = typeof appTheme;
declare module 'native-base' {
  interface ICustomTheme extends MyThemeType {}
}
export const AppProvider = ({ children, theme, ...props }: any) => {
  return (
    <NativeBaseProvider theme={extendTheme(appTheme, theme)} {...props}>
      {children}
    </NativeBaseProvider>
  );
};
