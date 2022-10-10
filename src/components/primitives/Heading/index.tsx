import React from 'react';
import { Heading as NBHeading, IHeadingProps } from 'native-base';
export const Heading = ({ ...props }: IHeadingProps) => {
  return <NBHeading {...props}></NBHeading>;
};
