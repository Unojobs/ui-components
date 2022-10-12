import { FormControl as FormControlBase } from './FormControl';
import { FormControlLabel } from './FormControlLabel';
import { FormControlErrorMessage } from './FormControlErrorMessage';
import { FormControlHelperText } from './FormControlHelperText';
import type {
  IFormControlProps,
  IFormControlLabelProps,
  IFormControlErrorMessageProps,
  IFormControlHelperTextProps,
} from 'native-base';

type FormControlComponentType = ((props: IFormControlProps) => JSX.Element) & {
  Label: React.MemoExoticComponent<
    (props: IFormControlLabelProps) => JSX.Element
  >;
  ErrorMessage: React.MemoExoticComponent<
    (props: IFormControlErrorMessageProps) => JSX.Element
  >;
  HelperText: React.MemoExoticComponent<
    (props: IFormControlHelperTextProps) => JSX.Element
  >;
};

let FormControlTemp: any = FormControlBase;
FormControlTemp.Label = FormControlLabel;
FormControlTemp.ErrorMessage = FormControlErrorMessage;
FormControlTemp.HelperText = FormControlHelperText;

// @ts-ignore
FormControlLabel.displayName = 'FormControl.Label';
// @ts-ignore
FormControlErrorMessage.displayName = 'FormControl.ErrorMessage';
// @ts-ignore
FormControlHelperText.displayName = 'FormControl.HelperText';

// To add typings
const FormControl = FormControlTemp as FormControlComponentType;

export { FormControl };

export type {
  IFormControlProps,
  IFormControlLabelProps,
  IFormControlErrorMessageProps,
  IFormControlHelperTextProps,
} from 'native-base';
