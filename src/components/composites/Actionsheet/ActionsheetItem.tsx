import React from "react";
import { Actionsheet as NBActionsheet } from "native-base";
export const ActionsheetItem = ({ ...props }: any) => {
  return <NBActionsheet.Item {...props}></NBActionsheet.Item>;
};
