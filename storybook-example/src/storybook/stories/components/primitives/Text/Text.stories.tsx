import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './Text.args';

import React from 'react';
import { Text } from 'components';

const TextTest = ({ ...args }) => {
  return (
    <Wrapper>
      <Text {...args}>This is Text.</Text>
    </Wrapper>
  );
};

export const TextComponent = TextTest.bind({});

export default {
  title: 'primitives/Text',
  component: TextComponent,
  argTypes: StorybookArgs,
};
