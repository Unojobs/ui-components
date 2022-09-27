import React from "react";
import { Select, StorybookSelectArgs } from "my-com-lib";
import { Wrapper } from "../../Wrapper";

const SelectComponent = ({ ...args }) => {
  return (
    <Wrapper>
      <Select
        minWidth="200"
        accessibilityLabel="Choose Service"
        placeholder="Choose Service"
        mt={1}
        {...args}
      >
        <Select.Item label="UX Research" value="ux" />
        <Select.Item label="Web Development" value="web" />
        <Select.Item label="Cross Platform Development" value="cross" />
        <Select.Item label="UI Designing" value="ui" />
        <Select.Item label="Backend Development" value="backend" />
      </Select>
    </Wrapper>
  );
};

export const Basic = SelectComponent.bind({});

export default {
  title: "Select",
  component: Basic,
  argTypes: StorybookSelectArgs,
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
