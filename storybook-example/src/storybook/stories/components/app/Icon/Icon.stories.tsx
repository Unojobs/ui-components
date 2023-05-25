import { Wrapper } from '../../Wrapper';
import React from 'react';
import {
  ConfirmIcon,
  UnoJobsDeleteIcon,
  EditIcon,
  RejectIcon,
  ViewIcon,
} from '../../../../../../../src/components/app';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'EditIcon',
  component: EditIcon,
} as ComponentMeta<typeof EditIcon>;

const Template: ComponentStory<typeof EditIcon> = (args) => (
  <Wrapper>
    <UnoJobsDeleteIcon {...args} />
    <EditIcon {...args} />
    <ViewIcon {...args} />
    <RejectIcon {...args} />
    <ConfirmIcon {...args} />
  </Wrapper>
);
export const Variants = Template.bind({});

Variants.args = {
  onClick: (event) => {},
};
