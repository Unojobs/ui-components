import { Popover as PopoverMain } from './Popover';
import { PopoverContent } from './PopoverContent';
import { PopoverBody } from './PopoverBody';
import { PopoverCloseButton } from './PopoverCloseButton';
import { PopoverFooter } from './PopoverFooter';
import { PopoverHeader } from './PopoverHeader';
import { PopoverArrow } from './PopoverArrow';
import type { IPopoverProps } from 'native-base';
export type { IPopoverProps } from './types';

const PopoverTemp: any = PopoverMain;
PopoverTemp.Content = PopoverContent;
PopoverTemp.CloseButton = PopoverCloseButton;
PopoverTemp.Header = PopoverHeader;
PopoverTemp.Footer = PopoverFooter;
PopoverTemp.Body = PopoverBody;
PopoverTemp.Arrow = PopoverArrow;

// To add typings
const Popover: any = PopoverTemp as IPopoverProps;
export { Popover };
