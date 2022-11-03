import React from 'react';
import { Box, Input } from '../../../primitives';
import { SearchOutlined } from '@ant-design/icons';
export interface SearchBarProps {}
export const SearchBar = (props: SearchBarProps) => {
  const {} = props;
  const handleChange = (event: any) => {
    // eslint-disable-next-line no-console
    console.log(event.target.value);
  };
  return (
    <Box
      width={327}
      height={45}
      paddingX={13}
      paddingY={5}
      justifyContent="center"
    >
      <Input
        placeholder="Search Message"
        onChange={handleChange}
        // value={searchVal}
        width={'full'}
        fontSize={12}
        InputRightElement={<SearchOutlined />}
        variant={'unstyled'}
      />
    </Box>
  );
};
