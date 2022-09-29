import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './Fab.args';

import { Fab, Icon, Box } from 'components';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const Example = () => {
  return (
    <Box position="relative" h={100} w={100}>
      <Fab
        position="absolute"
        size="sm"
        icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
      />
    </Box>
  );
};

const FabTest = ({ ...args }) => {
  return (
    <Wrapper>
      <Example {...args} />
    </Wrapper>
  );
};

export const FabComponent = FabTest.bind({});

export default {
  title: 'composites/Fab',
  component: FabComponent,
  argTypes: StorybookArgs,
};
