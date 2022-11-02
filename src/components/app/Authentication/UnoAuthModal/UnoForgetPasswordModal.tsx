import React from 'react';
import { Form, Input } from 'antd';
import { IconButton, Modal } from '../../../composites';
import { HStack, Text, VStack } from '../../../primitives';
import { CustomButton } from '../../CustomButton';
import { style } from '../style.authentication';
import { BackArrowIcon } from '../../Icons';
import type { IUnoForgetPasswordModalProps } from './types';
import { emailValidator } from '../helper.authentication';
import '../styles.authentication.css';

export const UnoForgetPasswordModal = (props: IUnoForgetPasswordModalProps) => {
  return (
    <>
      <Modal
        isOpen={props.isOpened}
        onClose={() => props.setIsOpened(false)}
        safeAreaTop={true}
        closeOnOverlayClick={false}
      >
        <Modal.Content {...style.modalPosition}>
          <IconButton
            icon={<BackArrowIcon />}
            onPress={() => props.setIsOpened(false)}
            {...style.backIconButton}
            {...style.backArrowModalIcon}
            _hover={{
              backgroundColor: '#ffffff',
            }}
          />
          <Modal.Body>
            <VStack {...style.mainContainer}>
              {(props.title || props.unoLogo) && (
                <Text {...style.heading} textAlign="center">
                  <HStack space={8}>
                    {props.unoLogo}
                    {props.title}
                  </HStack>
                </Text>
              )}
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
    </>
  );
};
UnoForgetPasswordModal.defaultProps = {
  heading: '',
  subHeading: '',
  title: '',
  onSubmit: undefined,
  isOpened: false,
  setIsOpened: undefined,
  unoLogo: undefined,
  buttonText: 'Send an email',
  tooltip: {
    email: 'Required',
  },
  placeholder: {
    email: '',
  },
};
