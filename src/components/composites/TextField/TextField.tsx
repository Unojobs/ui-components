import React from 'react';
import { IInputProps, Input as NBTextField } from 'native-base';
export const TextField = React.memo(({ ...props }: IInputProps) => {
  return <NBTextField {...props} />;
});
