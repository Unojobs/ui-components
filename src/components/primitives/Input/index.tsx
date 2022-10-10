import React from 'react';
import { IInputProps, Input as NBInput } from 'native-base';

export const Input = ({ ...props }: IInputProps) => {
  return <NBInput {...props}></NBInput>;
};
