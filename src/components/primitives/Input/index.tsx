import React from 'react';
import { IInputProps, Input as NBInput } from 'native-base';

export const Input = React.memo(({ ...props }: IInputProps) => {
  return <NBInput {...props} />;
});
