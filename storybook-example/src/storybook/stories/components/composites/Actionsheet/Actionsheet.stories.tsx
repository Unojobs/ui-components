import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './Actionsheet.args';

import React from 'react';
import {
  Button,
  Actionsheet,
  useDisclose,
  Text,
  Box,
  Center,
} from 'components';

const ActionsheetTest = ({ ...args }) => {
  const { isOpen, onOpen, onClose } = useDisclose();

  return (
    <Wrapper>
      <Button onPress={onOpen}>Actionsheet</Button>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text fontSize="16" color="gray.500" _dark={{ color: 'gray.300' }}>
              Albums
            </Text>
          </Box>
          <Actionsheet.Item>Delete</Actionsheet.Item>
          <Actionsheet.Item isDisabled>Share</Actionsheet.Item>
          <Actionsheet.Item>Play</Actionsheet.Item>
          <Actionsheet.Item>Favourite</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Wrapper>
  );
};

export const ActionsheetComponent = ActionsheetTest.bind({});

export default {
  title: 'composites/Actionsheet',
  component: ActionsheetComponent,
  argTypes: StorybookArgs,
};
