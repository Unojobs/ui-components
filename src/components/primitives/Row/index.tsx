import React from 'react';
import { IStackProps, Row as NBRow } from 'native-base';
export const Row = ({ ...props }: IStackProps) => {
  return <NBRow {...props}></NBRow>;
};
