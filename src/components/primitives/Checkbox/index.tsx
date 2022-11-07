import React from 'react';
import { Checkbox as NBCheckbox, ICheckboxProps } from 'native-base';

export const CheckboxTemp = ({ ...props }: ICheckboxProps) => {
  return <NBCheckbox {...props}>Checkbox</NBCheckbox>;
};

const Checkbox: any = CheckboxTemp;
Checkbox.displayName = 'Checkbox';
Checkbox.displayName = 'Checkbox.Group';
Checkbox.Group = Checkbox;
export default Checkbox;
