import React from 'react';
import { IStackProps, VStack as NBVStack } from 'native-base';
export const VStack = React.memo(({ ...props }: IStackProps) => {
  return <NBVStack {...props} />;
});
