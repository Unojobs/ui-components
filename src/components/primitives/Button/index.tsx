import React from 'react';
import { Button as NBButton, IButtonProps } from 'native-base';

export const Button = ({ ...props }: IButtonProps) => {
  return <NBButton {...props}></NBButton>;
};

export { ButtonGroup } from './ButtonGroup';
