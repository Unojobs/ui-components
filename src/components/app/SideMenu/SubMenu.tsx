import React, { useState } from 'react';
import { DownArrowCurvedIcon } from '../Icons';
import { MenuItem } from './MenuItem';
import type { MenuDataType } from './SideMenu';
import './SideMenu.css';

/** Props for subMenu */
export interface ISubMenuProps {
  menuData: MenuDataType;
  selectedMenuItem: string;
  onMenuItemClick: (id: string, parentId?: string) => void;
  isParentSelected: boolean;
}

export const SubMenu = (props: ISubMenuProps) => {
  const { menuData, selectedMenuItem, onMenuItemClick, isParentSelected } =
    props;
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
  const onClickHandler = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div>
      <div
        className={`menuItem ${_parentSelected && 'parentSelection'}`}
        onClick={onClickHandler}
      >
        {menuData.icon}
        <p className="itemTitle">{menuData.title}</p>
        <div className={expanded ? 'downAnim' : 'upAnim'}>
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
              />
            );
          })}
      </div>
    </div>
  );
};
