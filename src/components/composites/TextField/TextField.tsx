import React from 'react';
import { ITextFieldProps, TextField as NBTextField } from 'native-base';
export const TextField = ({ ...props }: ITextFieldProps) => {
  return <NBTextField {...props}></NBTextField>;
};
