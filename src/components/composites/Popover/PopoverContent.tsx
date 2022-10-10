import React from 'react';
import { Popover as NBPopover, IBoxProps } from 'native-base';
export const PopoverContent = ({ ...props }: IBoxProps) => {
  return <NBPopover.Content {...props}></NBPopover.Content>;
};
