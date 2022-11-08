import React, { useEffect } from 'react';
import { Form, Input } from 'antd';
import { Center, IconButton, Modal } from '../../../composites';
import { HStack, Text, VStack } from '../../../primitives';
import { CustomButton } from '../../CustomButton';
import { style } from '../style.authentication';
import type { IUnoForgetPasswordModalProps } from './types';
import { emailValidator } from '../helper.authentication';
import '../styles.authentication.css';
import { LeftArrowIcon, UnojobsAppLogo } from '../../UnojobsIcons';

export const UnoForgetPasswordModal = (props: IUnoForgetPasswordModalProps) => {
  useEffect(() => {
    if (props.isOpened === true && window !== undefined) {
      // When the modal is shown, we want a fixed body
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
    }
    if (props.isOpened === false && window !== undefined) {
      // When the modal is hidden, we want to remain at the top of the scroll position
      document.body.style.position = '';
      document.body.style.top = '';
    }
  }, [props.isOpened]);

  return (
    <Center>
      <Modal
        isOpen={props.isOpened}
        onClose={props.onClose}
        safeAreaTop={true}
        closeOnOverlayClick={false}
      >
        <Modal.Content
          {...style.modalPosition}
          maxWidth={props.maxWidth}
          maxHeight={props.maxHeight}
        >
          <Modal.Body>
            <VStack {...style.mainContainer} space={props.verticalSpace}>
              {(props.title || props.unoLogo) && (
                <Text {...style.heading} textAlign="center">
                  <HStack space={8}>
                    {props.unoLogo}
                    {props.title}
                  </HStack>
                </Text>
              )}
              <IconButton
                onPressIn={props.onClose}
                {...style.backIconButton}
                {...style.backArrowModalIcon}
                _hover={{
                  backgroundColor: 'secondary.300',
                }}
                icon={<LeftArrowIcon size={6} />}
              />
              {(props.heading || props.subHeading) && (
                <VStack>
                  {props.heading && (
                    <Text {...style.heading}>{props.heading}</Text>
                  )}
                  {props.subHeading && (
                    <Text {...style.subHeading}>{props.subHeading}</Text>
                  )}
                </VStack>
              )}
              <Form
                layout="vertical"
                onFinish={props.onSubmit}
                scrollToFirstError={true}
                requiredMark={false}
                autoComplete={'off'}
                className="ant-form-wrapper-ui"
              >
                <Form.Item
                  label="Email"
                  name="email"
                  tooltip={props.tooltip?.email}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: '',
                    },
                    {
                      validator: (_, value) => emailValidator(value),
                    },
                  ]}
                >
                  <Input
                    type="email"
                    placeholder={props.placeholder?.email}
                    style={style.input}
                    suffix={' '}
                  />
                </Form.Item>
                <CustomButton {...style.submitButton} htmlType="submit">
                  {props.buttonText}
                </CustomButton>
              </Form>
            </VStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Center>
  );
};
UnoForgetPasswordModal.defaultProps = {
  heading: '',
  subHeading: '',
  title: '',
  onSubmit: undefined,
  isOpened: false,
  setIsOpened: undefined,
  unoLogo: <UnojobsAppLogo />,
  buttonText: 'Send an email',
  tooltip: {
    email: 'Required',
  },
  placeholder: {
    email: '',
  },
  verticalSpace: 30,
  maxWidth: 500,
  maxHeight: 500,
  onClose: undefined,
};
