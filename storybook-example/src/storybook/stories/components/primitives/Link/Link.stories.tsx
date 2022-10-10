import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './Link.args';

import React from 'react';
import { Link, Box } from 'components';

const LinkTest = ({ ...args }) => {
  return (
    <Wrapper>
      <Link {...args} href="https://nativebase.io">
        Click here to open documentation.
      </Link>
    </Wrapper>
  );
};

export const LinkComponent = LinkTest.bind({});

export default {
  title: 'primitives/Link',
  component: LinkComponent,
  argTypes: StorybookArgs,
};
