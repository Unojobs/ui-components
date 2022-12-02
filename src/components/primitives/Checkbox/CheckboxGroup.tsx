import React from 'react';
import { Checkbox as NBCheckbox, ICheckboxGroupProps } from 'native-base';
export const CheckboxGroup = React.memo(({ ...props }: ICheckboxGroupProps) => {
  return <NBCheckbox.Group {...props} />;
});
