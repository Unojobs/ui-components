import React from 'react';
import { Radio, StorybookRadioArgs } from 'components';
import { Wrapper } from '../../Wrapper';

// const RadioComponent = ({ ...args }) => {
//   return (
//     <Wrapper>
//       <Radio.Group
//         name="exampleGroup"
//         accessibilityLabel="Pick your favorite number"
//       >
//         <Radio value="test" my={1} {...args}>
//           Radio
//         </Radio>
//       </Radio.Group>
//     </Wrapper>
//   );
// };

const RadioGroupComponent = (args: any) => {
  return (
    <Wrapper>
      <Radio.Group
        name="exampleGroup"
        {...args}
        accessibilityLabel="Pick your favorite number"
      >
        <Radio value="test" my={1}>
          Radio
        </Radio>
      </Radio.Group>
    </Wrapper>
  );
};

export const Basic = RadioGroupComponent.bind({});

export default {
  title: 'primitives/Radio Group',
  component: Basic,
  argTypes: StorybookRadioArgs,
};

// export const RadioGroup = RadioGroupComponent.bind({});
//  RadioGroup.args={
//    Primary:{

//    }
//  }
