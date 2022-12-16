import React from 'react';
import { IZStackProps, ZStack as NBZStack } from 'native-base';
export const ZStack = React.memo(({ ...props }: IZStackProps) => {
  return <NBZStack {...props} />;
});
