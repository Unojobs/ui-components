import React from 'react';
import { Backdrop as NBBackdrop, IPressableProps } from 'native-base';

export const Backdrop = ({ ...props }: IPressableProps) => {
  return <NBBackdrop {...props}></NBBackdrop>;
};
