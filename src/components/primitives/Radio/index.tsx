import React from "react";
import { Radio as NBRadio } from "native-base";

const RadioTemp: any = ({ children, ...props }: any) => {
  return <NBRadio {...props}>{children}</NBRadio>;
};

const RadioTempGroup = ({ children, ...props }: any) => {
  return <NBRadio.Group {...props}>{children}</NBRadio.Group>;
};
const Radio: any = RadioTemp;
Radio.Group = RadioTempGroup;
export default Radio;
