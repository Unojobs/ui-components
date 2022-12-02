import React from 'react';
import { FormControl as NBFormControl, IFormControlProps } from 'native-base';
export const FormControl = React.memo(({ ...props }: IFormControlProps) => {
  return <NBFormControl {...props} />;
});
