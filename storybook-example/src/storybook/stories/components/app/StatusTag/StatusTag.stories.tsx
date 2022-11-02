import React from 'react';
import { HStack, StatusTag, Text } from 'components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Wrapper } from '../../Wrapper';

export default {
  title: 'StatusTag',
  component: StatusTag,
} as ComponentMeta<typeof StatusTag>;

const Template: ComponentStory<typeof StatusTag> = (args) => (
  <Wrapper>
    <HStack space={4}>
      <StatusTag {...args}>New</StatusTag>
      <StatusTag {...args} backgroundColor="#89d86033" textColor="#73C04B">
        Approved
      </StatusTag>
      <StatusTag {...args} backgroundColor="#FEE9DE" textColor="#EB5757">
        Rejected
      </StatusTag>
      <StatusTag {...args} backgroundColor="#fee1651a" textColor="#DBB100">
        Reapply
      </StatusTag>
    </HStack>
  </Wrapper>
);
export const Variants = Template.bind({});

Variants.args = {};
