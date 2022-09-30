import React from 'react';
import { Button as NBButton, IButtonProps } from 'native-base';
import { ButtonGroup } from './ButtonGroup';

export const Button = ({ ...props }: IButtonProps) => {
  return <NBButton {...props}></NBButton>;
};
// @ts-ignore
ButtonGroup.displayName = 'Button.Group';
export { ButtonGroup } from './ButtonGroup';
