import React from 'react';
import { Circle as NBCircle, ICircleProps } from 'native-base';
export const Circle = React.memo(({ ...props }: ICircleProps) => {
  return <NBCircle {...props} />;
});
