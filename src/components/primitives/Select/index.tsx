import React from 'react';
import {
  ISelectItemProps,
  ISelectProps,
  Select as NBSelect,
} from 'native-base';

const SelectTemp: any = React.memo(({ children, ...props }: ISelectProps) => {
  return <NBSelect {...props}>{children}</NBSelect>;
});

const SelectTempItem = React.memo(
  ({ children, ...props }: ISelectItemProps) => {
    return <NBSelect.Item {...props}>{children}</NBSelect.Item>;
  }
);
const Select: any = SelectTemp;
Select.Item = SelectTempItem;
export default Select;
