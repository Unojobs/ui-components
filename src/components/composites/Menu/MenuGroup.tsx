import React from "react";
import { Menu as NBMenu } from "native-base";
export const MenuGroup = ({ ...props }: any) => {
  return <NBMenu.Group {...props}></NBMenu.Group>;
};
