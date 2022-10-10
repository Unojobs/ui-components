import {FormControl as  FormControlBase } from './FormControl';
import {  FormControlLabel } from './FormControlLabel';
import {  FormControlErrorMessage } from './FormControlErrorMessage';
import {  FormControlHelperText } from './FormControlHelperText';
import type { IFormControlProps } from 'native-base';

let FormControlTemp: any = FormControlBase;
FormControlTemp.Label = FormControlLabel;
FormControlTemp.ErrorMessage = FormControlErrorMessage;
FormControlTemp.HelperText = FormControlHelperText;

// @ts-ignore
FormControlLabel.displayName="FormControl.Label"
// @ts-ignore
FormControlErrorMessage.displayName="FormControl.ErrorMessage"
// @ts-ignore
FormControlHelperText.displayName="FormControl.HelperText"

// To add typings
const FormControl = FormControlTemp as IFormControlProps ;

export { FormControl };


export type {
  IFormControlProps,
  IFormControlLabelProps,
  IFormControlErrorMessageProps,
  IFormControlHelperTextProps,
} from 'native-base';
