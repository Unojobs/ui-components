import React from 'react';
import { Hidden as NBHidden, IHiddenProps } from 'native-base';
export const Hidden = ({ ...props }: IHiddenProps) => {
  return <NBHidden {...props}></NBHidden>;
};
