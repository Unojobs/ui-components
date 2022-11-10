import React from 'react';
import { Box, Input, SearchIcon } from '../../../primitives';
// MessagesSidebar > Searchbar
export interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
}
export const SearchBar = (props: SearchBarProps) => {
  const { value, onChangeText } = props;
  return (
    <Box
      justifyContent={'center'}
      height={'43px'}
      borderStyle={'solid'}
      borderColor={'light.300'}
      borderWidth={'1'}
      borderRadius={'sm'}
    >
      <Box marginRight={'2'}>
        <Input
          placeholder="Search Messages"
          InputRightElement={<SearchIcon size={'lg'} />}
          variant={'unstyled'}
          fontSize={'md'}
          onChangeText={onChangeText}
          value={value}
        />
      </Box>
    </Box>
  );
};
