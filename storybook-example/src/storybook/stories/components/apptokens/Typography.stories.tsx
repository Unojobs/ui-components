import { Wrapper } from '../Wrapper';
import React from 'react';
import { Typography } from 'components';

const TypographyTest = ({ ...args }) => {
  return (
    <Wrapper>
      <Typography />
    </Wrapper>
  );
};

export const TypographyComponent = TypographyTest.bind({});

export default {
  title: 'app-tokens/Typography',
  component: TypographyComponent,
  argTypes: {},
};
