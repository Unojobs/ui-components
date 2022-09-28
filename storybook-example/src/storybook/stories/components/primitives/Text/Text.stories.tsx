import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './Text.args';

import React from 'react';
import { Text } from 'components';

const Example = ({ ...args }) => {
  return <Text {...args}>This is Text.</Text>;
};

const TextTest = ({ ...args }) => {
  return (
    <Wrapper>
      <Example {...args} />
    </Wrapper>
  );
};

export const TextComponent = TextTest.bind({});

export default {
  title: 'primitives/Text',
  component: TextComponent,
  argTypes: StorybookArgs,
};
