import React from 'react';
import { ISwitchProps, Switch as NBSwitch } from 'native-base';

export const Switch = ({ ...props }: ISwitchProps) => {
  return <NBSwitch {...props}></NBSwitch>;
};
