import React, { ReactNode, useState } from 'react';
import { MenuItem } from './MenuItem';
import { SubMenu } from './SubMenu';
import './SideMenu.css';

/**
 * Data type for menu items.
 * title : Title displayed for each item
 * icon : prefix Icon for each item
 * suffixIcon: Suffix Icon for each item
 * route : unique route for each item
 * childItems : to create a submenu
 */
export type MenuDataType = {
  title: string;
  icon?: ReactNode;
  suffixIcon?: ReactNode;
  route: string;
  childItems?: MenuDataType[];
};

/**
 * Props for sidemenu
 */
export interface ISideMenuProps {
  /** React component at the start of menu */
  prefix?: ReactNode;
  /** React component at the end of menu */
  suffix?: ReactNode;
  /** custom width for the menu */
  width?: number;
  /** selected item. if not passed, defaults to the first valid item */
  selectedKey?: string;
  /** handler for menu item click, gives route based on the selected item */
  onMenuItemClick: (value: string) => void;
  /** Data for side menu */
  menuData: MenuDataType[];
  /** styles for overriding side menu */
  bodyStyles?: React.CSSProperties;
}

export const SideMenu = (props: ISideMenuProps) => {
  const {
    prefix,
    suffix,
    selectedKey,
    width,
    onMenuItemClick,
    menuData,
    bodyStyles,
  } = props;

  // if selectedItem is not set, set first route as default selected,
  // if first route is nested then set first child route as default selected

  const _selectedKey =
    selectedKey ||
    (menuData[0].childItems
      ? menuData[0].childItems[0].route
      : menuData[0].route);

  const [selectedMenuItem, setSelectedMenuItem] =
    useState<string>(_selectedKey);
  const [parentSelection, setParentSelction] = useState<string>();

  const onMenuItemClickHandler = (id: string, parentId?: string) => {
    onMenuItemClick(id);
    setParentSelction(undefined);
    if (parentId !== undefined) setParentSelction(parentId);
    setSelectedMenuItem(id);
  };

  return (
    <div className="sidermenu" style={{ ...bodyStyles, maxWidth: width }}>
      {prefix}
      {menuData.map((data) => {
        if (data.childItems !== undefined) {
          return (
            <SubMenu
              key={data.route}
              menuData={data}
              selectedMenuItem={selectedMenuItem}
              onMenuItemClick={onMenuItemClickHandler}
              isParentSelected={parentSelection === data.route}
            />
          );
        }
        return (
          <MenuItem
            key={data.route}
            route={data.route}
            title={data.title}
            prefixIcon={data.icon}
            suffixIcon={data.suffixIcon}
            isSelected={data.route === selectedMenuItem}
            onMenuItemClick={onMenuItemClickHandler}
          />
        );
      })}
      {suffix}
    </div>
  );
};
