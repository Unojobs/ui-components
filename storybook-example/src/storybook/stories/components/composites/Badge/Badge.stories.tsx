import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './Badge.args';

import React from 'react';
import { Badge } from 'components';

const BadgeTest = ({ ...args }) => {
  return (
    <Wrapper>
      <Badge>NEW FEATURE</Badge>
    </Wrapper>
  );
};

export const BadgeComponent = BadgeTest.bind({});

export default {
  title: 'composites/Badge',
  component: BadgeComponent,
  argTypes: StorybookArgs,
};
