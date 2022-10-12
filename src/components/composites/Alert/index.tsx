import { AlertIcon } from './AlertIcon';
import { Alert as AlertMain } from './Alert';
import type { IAlertProps } from 'native-base';

export type { IAlertProps } from 'native-base';

const AlertTemp: any = AlertMain;
AlertTemp.Icon = AlertIcon;
// @ts-ignore
AlertIcon.displayName = 'Alert.Icon';
// To add typings
const Alert: any = AlertTemp as IAlertProps;
export { Alert };
