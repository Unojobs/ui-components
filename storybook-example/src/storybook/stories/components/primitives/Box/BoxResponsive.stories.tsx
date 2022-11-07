import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './Box.args';
import React from 'react';
import { Box } from 'components';
import { Dimensions } from 'react-native';
const BoxTest = ({ ...args }) => {
  return (
    <Wrapper>
      <Box
        w={48}
        h={48}
        justifyContent="center"
        alignItems="center"
        bg={{
          base: 'red.100',
          xs: 'amber.100',
          sm: 'blue.100',
          md: 'violet.100',
          lg: 'green.100',
          xl: 'purple.100',
        }}
      >
        Responsive Box
      </Box>
    </Wrapper>
  );
};

export const BoxResponsiveComponent = BoxTest.bind({});

export default {
  title: 'primitives/Box',
  component: BoxResponsiveComponent,
  argTypes: StorybookArgs,
};
