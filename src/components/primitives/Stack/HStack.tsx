import React from 'react';
import { IStackProps, HStack as NBHStack } from 'native-base';
export const HStack = ({ ...props }: IStackProps) => {
  return <NBHStack {...props}></NBHStack>;
};
