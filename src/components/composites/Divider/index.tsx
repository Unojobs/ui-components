import React from 'react';
import { Divider as NBDivider, IDividerProps } from 'native-base';

export const Divider = React.memo(({ ...props }: IDividerProps) => {
  return <NBDivider {...props} />;
});
