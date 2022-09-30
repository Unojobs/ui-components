import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './Box.args';

import React from 'react';
import { Box } from 'components';

const BoxTest = ({ ...args }) => {
  return (
    <Wrapper>
      <Box
        alignSelf="center"
        bg="primary.500"
        _text={{
          fontSize: 'md',
          fontWeight: 'medium',
          color: 'warmGray.50',
          letterSpacing: 'lg',
        }}
      >
        This is a Box
      </Box>
    </Wrapper>
  );
};

export const BoxComponent = BoxTest.bind({});

export default {
  title: 'primitives/Box',
  component: BoxComponent,
  argTypes: StorybookArgs,
};
