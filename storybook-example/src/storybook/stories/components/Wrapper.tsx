import React from "react";
import { AppProvider, Box } from "components";

export const Wrapper = (props: any) => {
  return (
    <AppProvider>
      <Box alignItems={"center"} justifyContent="center">
        {props.children}
      </Box>
    </AppProvider>
  );
};
