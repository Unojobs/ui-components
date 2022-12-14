import React from 'react';
import { IRadioGroupProps, IRadioProps, Radio as NBRadio } from 'native-base';

const RadioTemp: any = React.memo(({ children, ...props }: IRadioProps) => {
  return <NBRadio {...props}>{children}</NBRadio>;
});

const RadioGroup = React.memo(({ children, ...props }: IRadioGroupProps) => {
  return <NBRadio.Group {...props}>{children}</NBRadio.Group>;
});
const Radio: any = RadioTemp as IRadioProps;
Radio.displayName = 'Radio';
RadioGroup.displayName = 'Radio.Group';
Radio.Group = RadioGroup;
export default Radio;
