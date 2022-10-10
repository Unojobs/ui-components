import React from 'react';
import { Fade as NBFade, IFadeProps } from 'native-base';
export const Fade = ({ ...props }: IFadeProps) => {
  return <NBFade {...props}></NBFade>;
};
