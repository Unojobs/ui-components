import React from 'react';
import {
  FormControl as NBFormControl,
  IFormControlLabelProps,
} from 'native-base';
export const FormControlLabel = ({ ...props }: IFormControlLabelProps) => {
  return <NBFormControl.Label {...props}></NBFormControl.Label>;
};
