import type {
  IMenuGroupProps,
  IMenuItemOptionProps,
  IMenuItemProps,
  IMenuOptionGroupProps,
  IMenuProps,
} from 'native-base';
import type { MutableRefObject } from 'react';
import { Menu as MenuMain } from './Menu';
import { MenuGroup } from './MenuGroup';
import { MenuItem } from './MenuItem';
import { MenuItemOption } from './MenuItemOption';
import { MenuOptionGroup } from './MenuOptionGroup';

let MenuTemp: any = MenuMain;
MenuTemp.Item = MenuItem;
MenuTemp.Group = MenuGroup;
MenuTemp.ItemOption = MenuItemOption;
MenuTemp.OptionGroup = MenuOptionGroup;

// @ts-ignore
MenuItem.displayName = 'Menu.Item';
// @ts-ignore
MenuGroup.displayName = 'Menu.Group';
// @ts-ignore
MenuItemOption.displayName = 'Menu.ItemOption';
// @ts-ignore
MenuOptionGroup.displayName = 'Menu.OptionGroup';

export type IMenuComponent = ((
  props: IMenuProps & { ref?: MutableRefObject<any> }
) => JSX.Element) & {
  Item: React.MemoExoticComponent<
    (props: IMenuItemProps & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
  Group: React.MemoExoticComponent<
    (props: IMenuGroupProps & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
  ItemOption: React.MemoExoticComponent<
    (
      props: IMenuItemOptionProps & { ref?: MutableRefObject<any> }
    ) => JSX.Element
  >;
  OptionGroup: React.MemoExoticComponent<
    (
      props: IMenuOptionGroupProps & { ref?: MutableRefObject<any> }
    ) => JSX.Element
  >;
};

// To add typings
const Menu = MenuTemp as IMenuComponent;

export { Menu };
export type {
  IMenuProps,
  IMenuItemProps,
  IMenuItemOptionProps,
  IMenuGroupProps,
  IMenuOptionGroupProps,
} from 'native-base';
