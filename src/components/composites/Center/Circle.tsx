import React from 'react';
import { Circle as NBCircle, ICircleProps } from 'native-base';
export const Circle = ({ ...props }: ICircleProps) => {
  return <NBCircle {...props}></NBCircle>;
};
