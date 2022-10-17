/* eslint-disable react-native/no-inline-styles */
// message screen sidebar with title+newMessageBtn + dropdown + searchbar + CardList
import React from 'react';
import { SelectSearch } from './SelectSearch';
import { TitleModalBtn } from './TitleModalBtn';
import { CardList, Cards } from '../CardList';
export interface MessageSidebarProps {
  options: string[];
  items: Cards[];
}
export const MessageSidebar = (props: MessageSidebarProps) => {
  const { options, items } = props;
  return (
    <div
      style={{
        width: 375,
        height: 1048,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <TitleModalBtn />
      <SelectSearch options={options} />
      <CardList listType="jobs" items={items} />
    </div>
  );
};
