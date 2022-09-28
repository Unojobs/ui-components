import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './Heading.args';

import React from 'react';
import { Heading } from 'components';

function Example() {
  return <Heading>I'm a Heading</Heading>;
}

const HeadingTest = ({ ...args }) => {
  return (
    <Wrapper>
      <Example {...args} />
    </Wrapper>
  );
};

export const HeadingComponent = HeadingTest.bind({});

export default {
  title: 'primitives/Heading',
  component: HeadingComponent,
  argTypes: StorybookArgs,
};
