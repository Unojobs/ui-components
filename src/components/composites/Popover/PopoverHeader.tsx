import React from 'react';
import { Popover as NBPopover, IBoxProps } from 'native-base';
export const PopoverHeader = React.memo(({ ...props }: IBoxProps) => {
  return <NBPopover.Header {...props} />;
});
