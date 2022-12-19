import React from 'react';
import { Box, Input, SearchIcon } from '../../../primitives';
// MessagesSidebar > Searchbar
export interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  height?: string;
}
const STATIC_PROPS = {
  CONTAINER_BOX: {
    justifyContent: 'center',
    borderStyle: 'solid',
    borderColor: 'light.300',
    borderWidth: 1,
    borderRadius: 'sm',
    paddingX: 5,
    paddingY: '12.5px',
  },
  INPUT: {
    InputRightElement: <SearchIcon size={5} />,
    variant: 'unstyled',
    fontSize: 14,
    placeholder: 'Search Messages',
  },
} as const;

export const SearchBar = (props: SearchBarProps) => {
  const { value, onChangeText, height } = props;
  return (
    <Box {...STATIC_PROPS.CONTAINER_BOX} height={height ?? '43px'}>
      <Input
        onChangeText={onChangeText}
        value={value}
        {...STATIC_PROPS.INPUT}
      />
    </Box>
  );
};
