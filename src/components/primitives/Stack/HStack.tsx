import React from 'react';
import { IStackProps, HStack as NBHStack } from 'native-base';
export const HStack = React.memo(({ ...props }: IStackProps) => {
  return <NBHStack {...props} />;
});
