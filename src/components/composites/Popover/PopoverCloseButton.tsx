import React from 'react';
import { IIconButtonProps, Popover as NBPopover } from 'native-base';
export const PopoverCloseButton = ({ ...props }: IIconButtonProps) => {
  return <NBPopover.CloseButton {...props}></NBPopover.CloseButton>;
};
