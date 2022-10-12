import { Actionsheet as ActionsheetMain } from './Actionsheet';
import { ActionsheetItem } from './ActionsheetItem';
// import ActionsheetHeader from './ActionsheetHeader';
// import ActionsheetFooter from './ActionsheetFooter';
import { ActionsheetContent } from './ActionsheetContent';
import type { IActionsheetProps } from 'native-base';

const ActionsheetTemp: any = ActionsheetMain as IActionsheetProps;
ActionsheetTemp.Content = ActionsheetContent;
ActionsheetTemp.Item = ActionsheetItem;
// ActionsheetTemp.Header = ActionsheetHeader;
// ActionsheetTemp.Footer = ActionsheetFooter;
// @ts-ignore
ActionsheetContent.displayName = 'Actionsheet.Content';
// @ts-ignore
ActionsheetItem.displayName = 'Actionsheet.Item';
// To add typings
const Actionsheet: any = ActionsheetTemp;

export { Actionsheet };

export type {
  IActionsheetProps,
  IActionsheetContentProps,
  IActionsheetItemProps,
} from 'native-base';
