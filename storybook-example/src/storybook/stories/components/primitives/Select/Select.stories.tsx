import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './Select.args';

import React from 'react';
import { Select, Box, CheckIcon, Center } from 'components';

const Example = () => {
  const [service, setService] = React.useState('');

  return (
    <Center>
      <Box maxW="300">
        <Select
          selectedValue={service}
          minWidth="200"
          accessibilityLabel="Choose Service"
          placeholder="Choose Service"
          _selectedItem={{
            bg: 'teal.600',
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(itemValue: any) => setService(itemValue)}
        >
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item label="Cross Platform Development" value="cross" />
          <Select.Item label="UI Designing" value="ui" />
          <Select.Item label="Backend Development" value="backend" />
        </Select>
      </Box>
    </Center>
  );
};

const SelectTest = ({ ...args }) => {
  return (
    <Wrapper>
      <Example {...args} />
    </Wrapper>
  );
};

export const SelectComponent = SelectTest.bind({});

export default {
  title: 'primitives/Select',
  component: SelectComponent,
  argTypes: StorybookArgs,
};
