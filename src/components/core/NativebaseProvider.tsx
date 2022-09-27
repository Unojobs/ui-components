import React from "react";
import { NativeBaseProvider as NBProvider } from "native-base";
import { myTheme } from "../../theme";

export const NativeBaseProvider = ({ children, theme, ...props }: any) => {
  let themeArr = [myTheme];
  if (theme) {
    //TODO: if theme is array it might break
    themeArr.push(theme);
  }

  return (
    <NBProvider theme={myTheme} {...props}>
      {children}
    </NBProvider>
  );
};
// export { NativeBaseProvider } from "native-base";
