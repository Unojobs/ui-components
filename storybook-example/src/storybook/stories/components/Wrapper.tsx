import React from 'react';
import { AppProvider, Box } from 'components';
import { Heading } from 'components';

export const Wrapper = (props: any) => {
  return (
    <AppProvider>
      <Box >
        {props.children}
      </Box>
    </AppProvider>
  );
};
