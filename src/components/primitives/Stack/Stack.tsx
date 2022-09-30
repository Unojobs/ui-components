import React from 'react';
import { IStackProps, Stack as NBStack } from 'native-base';
export const Stack = ({ ...props }: IStackProps) => {
  return <NBStack {...props}></NBStack>;
};
