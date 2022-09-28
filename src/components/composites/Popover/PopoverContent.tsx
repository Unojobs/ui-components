import React from "react";
import { Popover as NBPopover } from "native-base";
export const PopoverContent = ({ ...props }: any) => {
  return <NBPopover.Content {...props}></NBPopover.Content>;
};
