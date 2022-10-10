import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './Center.args';

import React from 'react';
import { Center } from 'components';

const CenterTest = ({ ...args }) => {
  return (
    <Wrapper>
      <Center
        bg="primary.400"
        _text={{ color: 'white', fontWeight: 'bold' }}
        height={200}
        width={{ base: 200, lg: 250 }}
      >
        This is the Center
      </Center>
    </Wrapper>
  );
};

export const CenterComponent = CenterTest.bind({});

export default {
  title: 'composites/Center',
  component: CenterComponent,
  argTypes: StorybookArgs,
};
