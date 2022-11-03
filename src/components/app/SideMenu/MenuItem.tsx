import React, { ReactNode } from 'react';
import './SideMenu.css';

/** props for menu item */
export interface IMenuItemProps {
  /** Title displayed for each item */
  title: string;
  /** Icon as prefix for item */
  prefixIcon?: ReactNode;
  /** Icon as suffix for item */
  suffixIcon?: ReactNode;
  /** unique route for each item */
  route: string;
  /** selected item */
  isSelected: boolean;
  /** sets a separator after passed keys */
  separatorAfterKeys?: string[];
  /** click Handler for item */
  onMenuItemClick: (id: string, parentId?: string) => void;
}

/** Menu item */
export const MenuItem = (props: IMenuItemProps) => {
  const {
    title,
    prefixIcon,
    suffixIcon,
    isSelected,
    onMenuItemClick,
    separatorAfterKeys,
    route,
  } = props;

  const _hasSeparatorBelow = separatorAfterKeys?.find((key) => key === route);

  const onClickHandler = () => {
    onMenuItemClick(route);
  };

  return (
    <>
      <div
        onClick={onClickHandler}
        className={`menuItem ${isSelected && 'selectedItem'}`}
      >
        {prefixIcon ? prefixIcon : <div className="empty-placeholder-svg" />}
        <p className="itemTitle">{title}</p>
        {suffixIcon}
      </div>
      {_hasSeparatorBelow && (
        <div className="menuItemSeparator">
          <div className="menuSeparatorLine" />
        </div>
      )}
    </>
  );
};
