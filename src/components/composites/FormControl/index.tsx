import {FormControl as  FormControlBase } from './FormControl';
import {  FormControlLabel } from './FormControlLabel';
import {  FormControlErrorMessage } from './FormControlErrorMessage';
import {  FormControlHelperText } from './FormControlHelperText';

let FormControlTemp: any = FormControlBase;
FormControlTemp.Label = FormControlLabel;
FormControlTemp.ErrorMessage = FormControlErrorMessage;
FormControlTemp.HelperText = FormControlHelperText;

// To add typings
const FormControl = FormControlTemp ;

export { FormControl };


export type {
  IFormControlProps,
  IFormControlLabelProps,
  IFormControlErrorMessageProps,
  IFormControlHelperTextProps,
} from 'native-base';
