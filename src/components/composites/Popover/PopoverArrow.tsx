import React from 'react';
import { Popover as NBPopover, IBoxProps } from 'native-base';
export const PopoverArrow = ({ ...props }: IBoxProps) => {
  return <NBPopover.Arrow {...props}></NBPopover.Arrow>;
};
