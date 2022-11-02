import React from 'react';
import { Form, Input } from 'antd';
import { IconButton, Modal } from '../../../composites';
import { HStack, Text, VStack } from '../../../primitives';
import { CustomButton } from '../../CustomButton';
import {
  emailValidator,
  passwordValidator,
  preventCopyPaste,
} from '../helper.authentication';
import { style } from '../style.authentication';
import {
  BackArrowIcon,
  FacebookLogo,
  Google as GoogleLogo,
  Linkedin as LinkedInLogo,
  UnojobsLogo,
} from '../../Icons';
import type { IUnoUserRegisterProps } from './types';
import '../styles.authentication.css';

export const UnoRegisterModal = (props: IUnoUserRegisterProps) => {
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
              <Text {...style.heading} textAlign="center" fontFamily={'body'}>
                <HStack space={8}>
                  {props.unoLogo}
                  {props.title}
                </HStack>
              </Text>
              <Text {...style.commonText}>Join using</Text>
              <HStack {...style.smButtonsContainer}>
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
                onFinish={props.onRegister}
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
                <Form.Item
                  label="Password"
                  name="password"
                  tooltip={props.tooltip?.password}
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
                    placeholder={props.placeholder?.password}
                    style={style.input}
                    onPaste={preventCopyPaste}
                    onCopy={preventCopyPaste}
                  />
                </Form.Item>
                <Form.Item
                  name="confirmPassword"
                  label="Confirm Password"
                  dependencies={['password']}
                  tooltip={props.tooltip?.confirmPassword}
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
                    placeholder={props.placeholder?.confirmPassword}
                    style={style.input}
                    onPaste={preventCopyPaste}
                    onCopy={preventCopyPaste}
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
UnoRegisterModal.defaultProps = {
  title: '',
  onRegister: undefined,
  isOpened: false,
  setIsOpened: undefined,
  isCandidate: false,
  onGoogleLogin: undefined,
  onLinkedInLogin: undefined,
  onFacebookLogin: undefined,
  unoLogo: <UnojobsLogo />,
  tooltip: {
    email: 'Required',
    password: 'Required',
    confirmPassword: 'Required',
  },
  buttonText: 'Register',
  placeholder: {
    email: '',
    password: '',
    confirmPassword: '',
  },
};
