import React from 'react';
import { IRadioGroupProps, IRadioProps, Radio as NBRadio } from 'native-base';

const RadioTemp: any = ({ children, ...props }: IRadioProps) => {
  return <NBRadio {...props}>{children}</NBRadio>;
};

const RadioTempGroup = ({ children, ...props }: IRadioGroupProps) => {
  return <NBRadio.Group {...props}>{children}</NBRadio.Group>;
};
const Radio: any = RadioTemp;
Radio.Group = RadioTempGroup;
export default Radio;
