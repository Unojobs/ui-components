import React from 'react';
import { Checkbox as NBCheckbox } from 'native-base';
export const CheckboxGroup = ({ ...props }: any) => {
  return <NBCheckbox.Group {...props}></NBCheckbox.Group>;
};
