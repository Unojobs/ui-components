import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Wrapper } from '../../../Wrapper';
import { ProjectCard, ProjectCardProps } from 'components';
import { StorybookArgs } from './ProjectCard.args';

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
