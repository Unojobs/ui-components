import React from 'react';
import { IWrapProps, Wrap as NBWrap } from 'native-base';

export const Wrap = ({ ...props }: IWrapProps) => {
  return <NBWrap {...props}></NBWrap>;
};
