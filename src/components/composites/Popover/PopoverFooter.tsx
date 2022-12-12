import React from 'react';
import { Popover as NBPopover, IBoxProps } from 'native-base';
export const PopoverFooter = React.memo(({ ...props }: IBoxProps) => {
  return <NBPopover.Footer {...props} />;
});
