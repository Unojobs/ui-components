import React from 'react';
import { Flex as NBFlex, IFlexProps } from 'native-base';
export const Flex = React.memo(({ ...props }: IFlexProps) => {
  return <NBFlex {...props} />;
});
