import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './Fab.args';

import { Fab, Icon, Box, AddIcon } from 'components';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const FabTest = ({ ...args }) => {
  return (
    <Wrapper>
      <Box position="relative" h={100} w={100}>
        <Fab
          {...args}
          position="absolute"
          size="sm"
          icon={<AddIcon color="white" />}
        />
      </Box>
    </Wrapper>
  );
};

export const FabComponent = FabTest.bind({});

export default {
  title: 'composites/Fab',
  component: FabComponent,
  argTypes: StorybookArgs,
};
