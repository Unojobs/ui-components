import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './Button.args';

import React from 'react';
import { Button } from 'components';

const ButtonTest = ({ ...args }) => {
  return (
    <Wrapper>
      <Button {...args} onPress={() => console.log('hello world')}>
        Click Me
      </Button>
    </Wrapper>
  );
};

export const ButtonComponent = ButtonTest.bind({});

export default {
  title: 'primitives/Button',
  component: ButtonComponent,
  argTypes: StorybookArgs,
};
