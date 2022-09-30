import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './ButtonGroup.args';

import React from 'react';
import { ButtonGroup, Button } from 'components';

const ButtonGroupTest = ({ ...args }) => {
  return (
    <Wrapper>
      <ButtonGroup
        isAttached
        colorScheme="blue"
        mx={{ base: 'auto', md: 0 }}
        size="sm"
      >
        <Button>Edit</Button>
        <Button variant="outline">Save</Button>
      </ButtonGroup>
    </Wrapper>
  );
};

export const ButtonGroupComponent = ButtonGroupTest.bind({});

export default {
  title: 'primitives/ButtonGroup',
  component: ButtonGroupComponent,
  argTypes: StorybookArgs,
};
