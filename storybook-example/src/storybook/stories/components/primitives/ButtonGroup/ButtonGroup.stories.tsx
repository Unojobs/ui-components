import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './ButtonGroup.args';

import React from 'react';
import { ButtonGroup } from 'components';

const Example = () => {
  return (
    <ButtonGroup
      isAttached
      colorScheme="blue"
      mx={{ base: 'auto', md: 0 }}
      size="sm"
    >
      <Button>Edit</Button>
      <Button variant="outline">Save</Button>
    </ButtonGroup>
  );
};

const ButtonGroupTest = ({ ...args }) => {
  return (
    <Wrapper>
      <Example {...args} />
    </Wrapper>
  );
};

export const ButtonGroupComponent = ButtonGroupTest.bind({});

export default {
  title: 'primitives/ButtonGroup',
  component: ButtonGroupComponent,
  argTypes: StorybookArgs,
};
