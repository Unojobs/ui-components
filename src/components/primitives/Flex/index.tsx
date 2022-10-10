import React from 'react';
import { Flex as NBFlex, IFlexProps } from 'native-base';
export const Flex = ({ ...props }: IFlexProps) => {
  return <NBFlex {...props}></NBFlex>;
};
