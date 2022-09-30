import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './Modal.args';

import React from 'react';
import {
  Button,
  Modal,
  FormControl,
  Input,
  Center,
  ButtonGroup,
} from 'components';
import { useState } from 'react';

const ModalTest = ({ ...args }) => {
  return (
    <Wrapper>
      <Center>
        <Button onPress={() => setShowModal(true)}>Button</Button>
      </Center>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Contact Us</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <ButtonGroup space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Save
              </Button>
            </ButtonGroup>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Wrapper>
  );
};

export const ModalComponent = ModalTest.bind({});

export default {
  title: 'composites/Modal',
  component: ModalComponent,
  argTypes: StorybookArgs,
};
