import React from 'react';
import { Heading as NBHeading, IHeadingProps } from 'native-base';
export const Heading = React.memo(({ ...props }: IHeadingProps) => {
  return <NBHeading {...props} />;
});
