import React from "react";
import { FormControl as NBFormControl } from "native-base";
export const FormControlErrorMessage = ({ ...props }: any) => {
  return <NBFormControl.ErrorMessage {...props}></NBFormControl.ErrorMessage>;
};
