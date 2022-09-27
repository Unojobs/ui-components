import React from "react";
import { Slider, StorybookSliderArgs, Box } from "my-com-lib";
import { Wrapper } from "../../Wrapper";

const SliderComponent = ({ ...args }) => {
  return (
    <Wrapper>
      <Box w="50%">
        <Slider defaultValue={70} colorScheme="emerald" {...args}>
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
      </Box>
    </Wrapper>
  );
};

export const Basic = SliderComponent.bind({});

export default {
  title: "Slider",
  component: Basic,
  argTypes: StorybookSliderArgs,
};

// const RadioGroupComponent = (args: any) => {
//   return (
//     <Wrapper>
//       <Radio.Group
//         name="exampleGroup"
//         {...args}
//         accessibilityLabel="Pick your favorite number"
//       >
//         <Radio value="test" my={1}>
//           Radio
//         </Radio>
//       </Radio.Group>
//     </Wrapper>
//   );
// };

// export const RadioGroup = RadioGroupComponent.bind({
//   args: {
//     StorybookRadioArgs,
//   },
// });
