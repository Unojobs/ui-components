import React from "react";
import { Select as NBSelect } from "native-base";

const SelectTemp: any = ({ children, ...props }: any) => {
  return <NBSelect {...props}>{children}</NBSelect>;
};

const SelectTempItem = ({ children, ...props }: any) => {
  return <NBSelect.Item {...props}>{children}</NBSelect.Item>;
};
const Select: any = SelectTemp;
Select.Item = SelectTempItem;
export default Select;
