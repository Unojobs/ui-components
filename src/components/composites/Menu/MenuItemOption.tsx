import React from "react";
import { Menu as NBMenu } from "native-base";
export const MenuItemOption = ({ ...props }: any) => {
  return <NBMenu.ItemOption {...props}></NBMenu.ItemOption>;
};
