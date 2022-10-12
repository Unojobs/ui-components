import { StorybookArgs } from './ProjectCard.args';
import React from 'react';
import { ProjectCard, ProjectCardProps } from 'components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Wrapper } from '../../../Wrapper';

export default {
  title: 'ProjectCard',
  component: ProjectCard,
} as ComponentMeta<typeof ProjectCard>;

const Template: ComponentStory<typeof ProjectCard> = (
  args: ProjectCardProps
) => {
  return (
    <Wrapper>
      <ProjectCard {...args} />
    </Wrapper>
  );
};
export const Variants = Template.bind({});

Variants.args = StorybookArgs;
