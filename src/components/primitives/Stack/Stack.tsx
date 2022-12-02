import React from 'react';
import { IStackProps, Stack as NBStack } from 'native-base';
export const Stack = React.memo(({ ...props }: IStackProps) => {
  return <NBStack {...props} />;
});
