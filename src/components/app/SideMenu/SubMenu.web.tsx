import React, { useState } from 'react';
import { DownArrowCurvedIcon } from '../Icons';
import { MenuItem } from './MenuItem.web';
import type { MenuDataType } from './SideMenu.web';
import './SideMenu.css';

/** Props for subMenu */
export interface ISubMenuProps {
  menuData: MenuDataType;
  /** unique route for each item */
  route: string;
  isSelected: boolean;
  selectedMenuItem: string;
  onMenuItemClick: (id: string, parentId?: string) => void;
  isParentSelected: boolean;
  /** sets a separator after passed keys */
  separatorAfterKeys?: string[];
}

export const SubMenu = (props: ISubMenuProps) => {
  const {
    menuData,
    isSelected,
    route,
    selectedMenuItem,
    onMenuItemClick,
    isParentSelected,
    separatorAfterKeys,
  } = props;
  const [expanded, setExpanded] = useState(true);

  // find which parent is selected based on the child route
  const _parentSelected =
    isParentSelected ||
    (menuData &&
      menuData.childItems?.find(
        (item: MenuDataType) => item.route === selectedMenuItem
      ));

  const onMenuItemClickHandler = (id: string) => {
    onMenuItemClick(id, menuData.route);
  };
  const onExpandedClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setExpanded((prev) => !prev);
  };
  const onClickHandler = () => {
    onMenuItemClick(route);
  };

  return (
    <div>
      <div
        onClick={onClickHandler}
        className={`menuItem ${_parentSelected && 'parentSelection'} ${
          isSelected && 'selectedItem'
        }`}
      >
        {menuData.icon}
        <p className="itemTitle">{menuData.title}</p>
        <div
          onClick={onExpandedClickHandler}
          className={expanded ? 'downAnim' : 'upAnim'}
        >
          <DownArrowCurvedIcon />
        </div>
      </div>
      <div className={`collapsableArea ${expanded ? 'open' : 'close'}`}>
        {menuData &&
          menuData.childItems?.map((data: MenuDataType) => {
            return (
              <MenuItem
                key={data.route}
                route={data.route}
                title={data.title}
                prefixIcon={data.icon}
                suffixIcon={data.suffixIcon}
                isSelected={data.route === selectedMenuItem}
                onMenuItemClick={onMenuItemClickHandler}
                separatorAfterKeys={separatorAfterKeys}
              />
            );
          })}
      </div>
    </div>
  );
};
