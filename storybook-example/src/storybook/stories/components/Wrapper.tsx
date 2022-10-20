import React from 'react';
import { AppProvider, Box } from 'components';
import { Heading } from 'components';

export const Wrapper = (props: any) => {
  return (
    <AppProvider>
      <Box alignItems={'center'} justifyContent="center" height={'100vh'}>
        {props.children}
      </Box>
    </AppProvider>
  );
};
