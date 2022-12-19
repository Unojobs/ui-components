import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Wrapper } from '../../../Wrapper';
import { CreateNewMessage } from 'components';

export default {
  title: 'CreateNewMessage',
  component: CreateNewMessage,
} as ComponentMeta<typeof CreateNewMessage>;

const Template: ComponentStory<typeof CreateNewMessage> = (args) => {
  return (
    <Wrapper>
      <CreateNewMessage {...args} />
    </Wrapper>
  );
};

export const Variants = Template.bind({});

Variants.args = {};
