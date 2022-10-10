import React from 'react';
import { ISquareProps, Square as NBSquare } from 'native-base';
export const Square = ({ ...props }: ISquareProps) => {
  return <NBSquare {...props}></NBSquare>;
};
