import React from 'react';
import { Checkbox as NBCheckbox, ICheckboxProps } from 'native-base';
import { CheckboxGroup } from './CheckboxGroup';

export const CheckboxTemp = ({ ...props }: ICheckboxProps) => {
  return <NBCheckbox {...props}>Checkbox</NBCheckbox>;
};

const Checkbox: any = CheckboxTemp;
Checkbox.displayName = 'Checkbox';
Checkbox.displayName = 'Checkbox.Group';
Checkbox.Group = CheckboxGroup;
export { Checkbox };
