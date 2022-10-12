import React from 'react';
import { IPopoverProps, Popover as NBPopover } from 'native-base';
export const Popover = ({ ...props }: IPopoverProps) => {
  return <NBPopover {...props}></NBPopover>;
};
