import React from 'react';
import {
  ISelectItemProps,
  ISelectProps,
  Select as NBSelect,
} from 'native-base';

const SelectTemp: any = ({ children, ...props }: ISelectProps) => {
  return <NBSelect {...props}>{children}</NBSelect>;
};

const SelectTempItem = ({ children, ...props }: ISelectItemProps) => {
  return <NBSelect.Item {...props}>{children}</NBSelect.Item>;
};
const Select: any = SelectTemp;
Select.Item = SelectTempItem;
export default Select;
