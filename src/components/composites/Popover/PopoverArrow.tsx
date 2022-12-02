import React from 'react';
import { Popover as NBPopover, IBoxProps } from 'native-base';
export const PopoverArrow = React.memo(({ ...props }: IBoxProps) => {
  return <NBPopover.Arrow {...props} />;
});
