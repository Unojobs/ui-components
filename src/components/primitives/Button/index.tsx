import React from 'react';
import { Button as NBButton, IButtonProps } from 'native-base';
import { ButtonGroup } from './ButtonGroup';

export const ButtonMain = ({ ...props }: IButtonProps) => {
  return <NBButton {...props}></NBButton>;
};

const ButtonTemp: any = ButtonMain;
ButtonTemp.Group = ButtonGroup;

// To add typings
const Button: any = ButtonTemp;

export { Button };
export type { IButtonProps } from 'native-base';
