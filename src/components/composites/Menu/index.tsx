import type {
  IMenuGroupProps,
  IMenuItemOptionProps,
  IMenuItemProps,
  IMenuOptionGroupProps,
  IMenuProps,
} from 'native-base';
import type { MemoExoticComponent, MutableRefObject, ReactElement } from 'react';
import { Menu as MenuMain } from './Menu';
import { MenuGroup } from './MenuGroup';
import { MenuItem } from './MenuItem';
import { MenuItemOption } from './MenuItemOption';
import { MenuOptionGroup } from './MenuOptionGroup';

const MenuTemp: any = MenuMain;
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
) => ReactElement) & {
  Item: MemoExoticComponent<
    (props: IMenuItemProps & { ref?: MutableRefObject<any> }) => ReactElement
  >;
  Group: MemoExoticComponent<
    (props: IMenuGroupProps & { ref?: MutableRefObject<any> }) => ReactElement
  >;
  ItemOption: MemoExoticComponent<
    (
      props: IMenuItemOptionProps & { ref?: MutableRefObject<any> }
    ) => ReactElement
  >;
  OptionGroup: MemoExoticComponent<
    (
      props: IMenuOptionGroupProps & { ref?: MutableRefObject<any> }
    ) => ReactElement
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
