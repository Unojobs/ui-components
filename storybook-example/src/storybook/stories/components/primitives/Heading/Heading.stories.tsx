import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './Heading.args';

import React from 'react';
import { Heading } from 'components';

const HeadingTest = ({ ...args }) => {
  return (
    <Wrapper>
      <Heading {...args}>I'm a Heading</Heading>
    </Wrapper>
  );
};

export const HeadingComponent = HeadingTest.bind({});

export default {
  title: 'primitives/Heading',
  component: HeadingComponent,
  argTypes: StorybookArgs,
};
