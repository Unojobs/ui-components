import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './AspectRatio.args';

import React from 'react';
import { AspectRatio, Box } from 'components';

const AspectRatioTest = ({ ...args }) => {
  return (
    <Wrapper>
      <AspectRatio height={200} ratio={{ base: 4 / 3, md: 16 / 9 }}>
        <Box bg="red.400" />
      </AspectRatio>
    </Wrapper>
  );
};

export const AspectRatioComponent = AspectRatioTest.bind({});

export default {
  title: 'composites/AspectRatio',
  component: AspectRatioComponent,
  argTypes: StorybookArgs,
};
