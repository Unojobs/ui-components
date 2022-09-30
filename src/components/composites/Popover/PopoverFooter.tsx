import React from 'react';
import { Popover as NBPopover, IBoxProps } from 'native-base';
export const PopoverFooter = ({ ...props }: IBoxProps) => {
  return <NBPopover.Footer {...props}></NBPopover.Footer>;
};
