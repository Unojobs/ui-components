import React from 'react';
import {
  FormControl as NBFormControl,
  IFormControlErrorMessageProps,
} from 'native-base';
export const FormControlErrorMessage = React.memo(
  ({ ...props }: IFormControlErrorMessageProps) => {
    return <NBFormControl.ErrorMessage {...props} />;
  }
);
