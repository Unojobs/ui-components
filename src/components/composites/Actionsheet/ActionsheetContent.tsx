import React from "react";
import { Actionsheet as NBActionsheet } from "native-base";
export const ActionsheetContent = ({ ...props }: any) => {
  return <NBActionsheet.Content {...props}></NBActionsheet.Content>;
};
