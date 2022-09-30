import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './CircularProgress.args';

import React from 'react';
import { CircularProgress, Heading, Center } from 'components';

const CircularProgressTest = ({ ...args }) => {
  return (
    <Wrapper>
      <Heading mb={6}>Default CircularProgress</Heading>
      <CircularProgress value={60} />
    </Wrapper>
  );
};

export const CircularProgressComponent = CircularProgressTest.bind({});

export default {
  title: 'composites/CircularProgress',
  component: CircularProgressComponent,
  argTypes: StorybookArgs,
};
