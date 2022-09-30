import React from 'react';
import { IStackProps, VStack as NBVStack } from 'native-base';
export const VStack = ({ ...props }: IStackProps) => {
  return <NBVStack {...props}></NBVStack>;
};
