import React from 'react';
import {
  FormControl as NBFormControl,
  IFormControlLabelProps,
} from 'native-base';
export const FormControlLabel = React.memo(
  ({ ...props }: IFormControlLabelProps) => {
    return <NBFormControl.Label {...props} />;
  }
);
