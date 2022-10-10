import React from 'react';
import { Divider as NBDivider, IDividerProps } from 'native-base';

export const Divider = ({ ...props }: IDividerProps) => {
  return <NBDivider {...props}></NBDivider>;
};
