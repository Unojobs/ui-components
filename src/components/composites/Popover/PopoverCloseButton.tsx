import React from 'react';
import { IIconButtonProps, Popover as NBPopover } from 'native-base';
export const PopoverCloseButton = React.memo(
  ({ ...props }: IIconButtonProps) => {
    return <NBPopover.CloseButton {...props} />;
  }
);
