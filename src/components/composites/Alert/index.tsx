import {AlertIcon} from './AlertIcon';
import {Alert as AlertMain} from './Alert';

export type { IAlertProps } from 'native-base';

const AlertTemp: any = AlertMain;
AlertTemp.Icon = AlertIcon;
// To add typings
const Alert = AlertTemp ;
export { Alert };
