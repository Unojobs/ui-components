import React from 'react';
import {
  Checkbox as NBCheckbox,
  ICheckboxGroupProps,
  ICheckboxProps,
} from 'native-base';
import { CheckboxGroup } from './CheckboxGroup';
import type { MutableRefObject } from 'react';
export const CheckboxMain = ({ ...props }: ICheckboxProps) => {
  return <NBCheckbox {...props}></NBCheckbox>;
};

export type ICheckboxComponentType = ((
  props: ICheckboxProps
) => JSX.Element) & {
  Group: React.MemoExoticComponent<
    (props: ICheckboxGroupProps, ref?: MutableRefObject<any>) => JSX.Element
  >;
};
const CheckTemp: any = CheckboxMain;
// Checkbox.displayName = 'Checkbox';
// Checkbox.displayName = 'Checkbox.Group';
CheckTemp.Group = CheckboxGroup;
// To add typings
const Checkbox = CheckTemp as ICheckboxComponentType;
export { Checkbox };
