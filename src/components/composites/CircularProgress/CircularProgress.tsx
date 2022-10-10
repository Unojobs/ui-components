import React from 'react';
import { CircularProgress as NBCircularProgress } from 'native-base';

export const CircularProgress = ({ ...props }: any) => {
  return <NBCircularProgress {...props}></NBCircularProgress>;
};
