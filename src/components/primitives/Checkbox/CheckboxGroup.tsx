import React from 'react';
import { Checkbox as NBCheckbox, ICheckboxGroupProps } from 'native-base';
export const CheckboxGroup = ({ ...props }: ICheckboxGroupProps) => {
  return <NBCheckbox.Group {...props}></NBCheckbox.Group>;
};
