import React from 'react';
import { Checkbox as NBCheckbox, ICheckboxProps } from 'native-base';

export const Checkbox = ({ ...props }: ICheckboxProps) => {
  return <NBCheckbox {...props}>Checkbox</NBCheckbox>;
};
export { CheckboxGroup } from './CheckboxGroup';
