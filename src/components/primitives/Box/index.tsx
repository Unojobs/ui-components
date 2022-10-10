import React from 'react';
import { Box as NBBox, IBoxProps } from 'native-base';

export const Box = ({ ...props }: IBoxProps) => {
  return <NBBox {...props}></NBBox>;
};
