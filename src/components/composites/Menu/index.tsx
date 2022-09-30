import type { IMenuProps } from 'native-base';
import { Menu as MenuMain } from './Menu';
import {MenuGroup} from './MenuGroup';
import {MenuItem} from './MenuItem';
import {MenuItemOption} from './MenuItemOption';
import {MenuOptionGroup} from './MenuOptionGroup';

let MenuTemp: any = MenuMain;
MenuTemp.Item = MenuItem;
MenuTemp.Group = MenuGroup;
MenuTemp.ItemOption = MenuItemOption;
MenuTemp.OptionGroup = MenuOptionGroup;

// To add typings
const Menu = MenuTemp as IMenuProps ;

export { Menu };
export type {
  IMenuProps,
  IMenuItemProps,
  IMenuItemOptionProps,
  IMenuGroupProps,
  IMenuOptionGroupProps,
} from 'native-base';
