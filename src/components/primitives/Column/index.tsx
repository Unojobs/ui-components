import React from 'react';
import { Column as NBColumn } from 'native-base';
import type { IStackProps } from 'native-base';
export const Column = React.memo(({ ...props }: IStackProps) => {
  return <NBColumn {...props} />;
});
