import {Actionsheet as ActionsheetMain} from './Actionsheet';
import {ActionsheetItem} from './ActionsheetItem';
// import ActionsheetHeader from './ActionsheetHeader';
// import ActionsheetFooter from './ActionsheetFooter';
import {ActionsheetContent} from './ActionsheetContent';
import type { IActionsheetProps } from 'native-base';


const ActionsheetTemp: any = ActionsheetMain;
ActionsheetTemp.Content = ActionsheetContent;
ActionsheetTemp.Item = ActionsheetItem;
// ActionsheetTemp.Header = ActionsheetHeader;
// ActionsheetTemp.Footer = ActionsheetFooter;

// To add typings
const Actionsheet: IActionsheetProps = ActionsheetTemp ;

export { Actionsheet };

export type {
  IActionsheetProps,
  IActionsheetContentProps,
  IActionsheetItemProps,
} from 'native-base';
