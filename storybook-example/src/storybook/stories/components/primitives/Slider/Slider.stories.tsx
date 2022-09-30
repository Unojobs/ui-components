import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './Slider.args';

import React from 'react';
import { Slider } from 'components';

const SliderTest = ({ ...args }) => {
  return (
    <Wrapper>
      <Slider
        {...args}
        w="3/4"
        maxW="300"
        defaultValue={70}
        minValue={0}
        maxValue={100}
        accessibilityLabel="hello world"
        step={10}
      >
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
    </Wrapper>
  );
};

export const SliderComponent = SliderTest.bind({});

export default {
  title: 'primitives/Slider',
  component: SliderComponent,
  argTypes: StorybookArgs,
};
