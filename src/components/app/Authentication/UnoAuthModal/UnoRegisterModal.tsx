import React from 'react';
import { Form, Input } from 'antd';
import { IconButton, Modal } from '../../../composites';
import { HStack, Text, VStack } from '../../../primitives';
import { CustomButton } from '../../CustomButton';
import { passwordValidator, preventCopyPaste } from '../helper.authentication';
import { style } from '../style.authentication';
import {
  BackArrowIcon,
  FacebookLogo,
  Google as GoogleLogo,
  Linkedin as LinkedInLogo,
  UnojobsLogo,
} from '../../Icons';
import type { IUnoUserRegisterProps } from './types';

export const UnoRegisterModal = (props: IUnoUserRegisterProps) => {
  const onFinishFailed = (errorInfo: any) => {
    console.warn('Failed:', errorInfo);
  };
  console.warn(props.isOpened);
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
            _hover={{
              backgroundColor: '#ffffff',
            }}
            {...style.backIconButton}
            {...style.backArrowModalIcon}
          />
          <Modal.Body>
            <VStack {...style.mainContainer}>
              <Text {...style.heading} textAlign="center" fontFamily={'body'}>
                <HStack space={8}>
                  {props.unoLogo}
                  {props.title}
                </HStack>
              </Text>
              <Text {...style.commonText}>Join using</Text>
              <HStack {...style.smButtons}>
                <IconButton
                  icon={<GoogleLogo />}
                  onPress={props.onGoogleLogin}
                  {...style.iconButton}
                />
                <IconButton
                  icon={<LinkedInLogo />}
                  onPress={props.onLinkedInLogin}
                  {...style.iconButton}
                />

                {props.isCandidate && (
                  <IconButton
                    icon={<FacebookLogo />}
                    onPress={props.onFacebookLogin}
                    {...style.iconButton}
                  />
                )}
              </HStack>
              <Text {...style.commonText}>Or</Text>
              <Form
                layout="vertical"
                onFinish={props.onSubmit}
                onFinishFailed={onFinishFailed}
                scrollToFirstError={true}
                requiredMark={false}
                autoComplete={'off'}
              >
                <Form.Item
                  label="Email"
                  name="email"
                  tooltip="This is a required field. e.g, abc@abc.com"
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: '',
                    },
                    {
                      validator: (_, value) => {
                        if (/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(value)) {
                          return Promise.resolve();
                        } else {
                          return Promise.reject();
                        }
                      },
                    },
                  ]}
                >
                  <Input
                    type="email"
                    placeholder="type here"
                    style={style.input}
                    suffix={' '}
                  />
                </Form.Item>
                <Form.Item
                  label="Password"
                  name="password"
                  tooltip="must contain uppercase, lowercase, number, special & min length of 10 characters"
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: '',
                    },
                    {
                      validator: (_, value) => passwordValidator(value),
                    },
                  ]}
                >
                  <Input.Password
                    placeholder="Enter your password"
                    style={style.input}
                    onPaste={preventCopyPaste}
                    onCopy={preventCopyPaste}
                  />
                </Form.Item>
                <Form.Item
                  name="confirmPassword"
                  label="Confirm Password"
                  dependencies={['password']}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: '',
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            'The two passwords that you entered do not match!'
                          )
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    placeholder="Please confirm your password"
                    style={style.input}
                    onPaste={preventCopyPaste}
                    onCopy={preventCopyPaste}
                  />
                </Form.Item>
                <CustomButton {...style.submitButton} htmlType="submit">
                  Submit
                </CustomButton>
              </Form>
            </VStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};
UnoRegisterModal.defaultProps = {
  title: '',
  onSubmit: undefined,
  isOpened: false,
  setIsOpened: undefined,
  isCandidate: false,
  onGoogleLogin: undefined,
  onLinkedInLogin: undefined,
  onFacebookLogin: undefined,
  unoLogo: <UnojobsLogo />,
};
