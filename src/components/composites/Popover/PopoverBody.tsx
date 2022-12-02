import React from 'react';
import { Popover as NBPopover, IBoxProps } from 'native-base';
export const PopoverBody = React.memo(({ ...props }: IBoxProps) => {
  return <NBPopover.Body {...props} />;
});
