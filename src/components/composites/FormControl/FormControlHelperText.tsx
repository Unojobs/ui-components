import React from 'react';
import {
  FormControl as NBFormControl,
  IFormControlHelperTextProps,
} from 'native-base';
export const FormControlHelperText = ({
  ...props
}: IFormControlHelperTextProps) => {
  return <NBFormControl.HelperText {...props}></NBFormControl.HelperText>;
};
