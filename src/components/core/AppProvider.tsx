import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { dsxTheme } from "../../theme";
import { customTheme } from "../../theme/customTheme";

export const appTheme = extendTheme(dsxTheme, customTheme);
export const AppProvider = ({ children, theme, ...props }: any) => {
  let themeArr = [appTheme];
  if (theme) {
    //TODO: if theme is array it might break
    themeArr.push(theme);
  }

  return (
    <NativeBaseProvider theme={appTheme} {...props}>
      {children}
    </NativeBaseProvider>
  );
};
// export { NativeBaseProvider } from "native-base";
