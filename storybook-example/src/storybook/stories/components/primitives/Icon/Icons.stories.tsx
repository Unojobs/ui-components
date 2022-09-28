import React from 'react';
import { Icon, StorybookIconArgs, Box } from 'components';
import { Wrapper } from '../../Wrapper';

const IconComponent = ({ ...args }) => {
  return (
    <Wrapper>
      <Icon {...args} color="coolGray.800" />
    </Wrapper>
  );
};

export const Basic = IconComponent.bind({});

export default {
  title: 'primitives/Icon',
  component: Basic,
  argTypes: StorybookIconArgs,
};
