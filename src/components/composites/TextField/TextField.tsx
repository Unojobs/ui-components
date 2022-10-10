import React from 'react';
import { IInputProps, Input as NBTextField } from 'native-base';
export const TextField = ({ ...props }: IInputProps) => {
  return <NBTextField {...props}></NBTextField>;
};
