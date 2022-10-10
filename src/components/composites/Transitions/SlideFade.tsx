import React from 'react';
import { ISlideFadeProps, SlideFade as NBSlideFade } from 'native-base';
export const SlideFade = ({ ...props }: ISlideFadeProps) => {
  return <NBSlideFade {...props}></NBSlideFade>;
};
