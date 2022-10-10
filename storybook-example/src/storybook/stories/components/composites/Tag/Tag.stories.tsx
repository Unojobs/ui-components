import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './Tag.args';

import React from 'react';
import { Tag } from 'components';

const TagTest = ({ ...args }) => {
  return (
    <Wrapper>
      <Tag>NativeBase</Tag>
    </Wrapper>
  );
};

export const TagComponent = TagTest.bind({});

export default {
  title: 'composites/Tag',
  component: TagComponent,
  argTypes: StorybookArgs,
};
