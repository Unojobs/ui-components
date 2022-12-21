import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { theme as defaultTheme } from '../../theme';
import { custom } from '../../theme/custom';
import merge from 'lodash.merge';
export const appTheme = extendTheme(merge({ ...defaultTheme }, { ...custom }));
export const AppProvider = ({ children, theme, ...props }: any) => {
  return (
    <NativeBaseProvider
      theme={extendTheme(
        merge({ ...defaultTheme }, { ...custom }, { ...theme })
      )}
      {...props}
    >
      {children}
    </NativeBaseProvider>
  );
};
