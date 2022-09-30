import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './Divider.args';

import React from 'react';
import { Divider, Heading, Box } from 'components';

const DividerTest = ({ ...args }) => {
  return (
    <Wrapper>
      <Box w="140">
        <Heading mx="3" alignItems="center" flexDirection="row">
          Chrome
        </Heading>
        <Divider
          my="2"
          _light={{ bg: 'muted.800' }}
          _dark={{ bg: 'muted.50' }}
        />
        <Heading mx="3" alignItems="center" flexDirection="row">
          Firefox
        </Heading>
      </Box>
    </Wrapper>
  );
};

export const DividerComponent = DividerTest.bind({});

export default {
  title: 'composites/Divider',
  component: DividerComponent,
  argTypes: StorybookArgs,
};
