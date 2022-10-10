import React from 'react';
import { Popover as NBPopover, IBoxProps } from 'native-base';
export const PopoverBody = ({ ...props }: IBoxProps) => {
  return <NBPopover.Body {...props}></NBPopover.Body>;
};
