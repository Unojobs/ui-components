import React from 'react';
import { Select } from '../../../primitives';

// MessagesSidebar > Select dropdown
export interface CategorySelectorProps {
  defaultValue: string;
  placeholder: string;
  onValueChange: (value: string) => void;
}
export const CategorySelector = (props: CategorySelectorProps) => {
  const { defaultValue, placeholder, onValueChange } = props;
  return (
    <Select
      variant={'outline'}
      fontSize={'lg'}
      defaultValue={defaultValue}
      placeholder={placeholder}
      onValueChange={onValueChange}
    >
      <Select.Item label="Projects" value="projects" />
      <Select.Item label="Candidates" value="candidates" />
    </Select>
  );
};
