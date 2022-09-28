import React from "react";
import { Menu as NBMenu } from "native-base";
export const MenuItem = ({ ...props }: any) => {
  return <NBMenu.Item {...props}></NBMenu.Item>;
};
