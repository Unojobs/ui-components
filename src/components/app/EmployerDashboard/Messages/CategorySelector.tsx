import React from 'react';
import { Select } from '../../../primitives';

// MessagesSidebar > Select dropdown

interface ListType {
  label: string;
  value: string;
}
export interface CategorySelectorProps {
  defaultValue: string;
  placeholder: string;
  onValueChange: (value: string) => void;
  list: Array<ListType>;
}

const STATIC_PROPS = {
  variant: 'outline',
  fontWeight: 400,
  lineHeight: '140%',
  letterSpacing: 0.16,
  fontSize: 'fontSizes.biggersm',
  selectedTextColor: 'textColors.primary',
} as const;

export const CategorySelector = (props: CategorySelectorProps) => {
  const { defaultValue, placeholder, onValueChange, list } = props;
  return (
    <Select
      defaultValue={defaultValue}
      placeholder={placeholder}
      onValueChange={onValueChange}
      {...STATIC_PROPS}
    >
      {list.map((obj) => (
        <Select.Item label={obj.label} value={obj.value} />
      ))}
    </Select>
  );
};

CategorySelector.defaultProps = {
  list: [],
  defaultValue: 'Projects',
};
