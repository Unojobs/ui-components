import React from "react";
import { NativeBaseProvider, Box } from "my-com-lib";

export const Wrapper = (props: any) => {
  return (
    <NativeBaseProvider>
      <Box alignItems={"center"} justifyContent="center">
        {props.children}
      </Box>
    </NativeBaseProvider>
  );
};
