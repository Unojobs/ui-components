
  import { Wrapper } from "../../Wrapper";
  import { StorybookArgs } from "./Slider.args";

  import React from 'react';
import { Slider, Box } from 'components';

export const Example = () => {
  return (
    <Box alignItems="center" w="100%">
      <Slider
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
    </Box>
  );
};


  const SliderTest = ({ ...args }) => {
    return (
      <Wrapper>
        <Example {...args}/>
      </Wrapper>
    );
  };
  
  export const SliderComponent = SliderTest.bind({});
  
  export default {
    title: "Slider",
    component: SliderComponent,
    argTypes: StorybookArgs,
  };
  