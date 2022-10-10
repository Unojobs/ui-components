import React from 'react';
import { IScaleFadeProps, ScaleFade as NBScaleFade } from 'native-base';
export const ScaleFade = ({ ...props }: IScaleFadeProps) => {
  return <NBScaleFade {...props}></NBScaleFade>;
};
