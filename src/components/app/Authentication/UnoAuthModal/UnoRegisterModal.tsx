import React, { useState } from 'react';
import { Checkbox, Form, Input } from 'antd';
import { IconButton, Modal } from '../../../composites';
import { HStack, Text, VStack } from '../../../primitives';
import { CustomButton } from '../../CustomButton';
import {
  emailValidator,
  passwordValidator,
  preventCopyPaste,
} from '../helper.authentication';
import { style } from '../style.authentication';
import type { IUnoUserRegisterProps } from './types';
import '../styles.authentication.css';
import {
  FacebookSMLogo,
  GoogleSMLogo,
  LeftArrowIcon,
  LinkedInSMLogo,
  UnojobsAppLogo,
} from '../../UnojobsIcons';
import type { RuleObject } from 'antd/lib/form';

export const UnoRegisterModal = (props: IUnoUserRegisterProps) => {
  const [checked, setChecked] = useState<boolean>(false);
  if (props.isOpened) {
    // When the modal is shown, we want a fixed body
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
  } else {
    // When the modal is hidden, we want to remain at the top of the scroll position
    document.body.style.position = '';
    document.body.style.top = '';
  }

  /**handle terms and condition using checkbox */

  const onCheckboxChange = async (e: any) => {
    await setChecked(e.target.checked);
  };

  const validation = (
    _rule: RuleObject,
    _value: any,
    callback: (error?: string) => void
  ) => {
    if (checked) {
      return callback();
    }
    return callback('');
  };

  return (
    <>
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
              <Text {...style.heading} textAlign="center" fontFamily={'body'}>
                <HStack space={8}>
                  {props.unoLogo}
                  {props.title}
                </HStack>
              </Text>
              <IconButton
                icon={<LeftArrowIcon size={6} />}
                onPressIn={props.onClose}
                {...style.backIconButton}
                {...style.backArrowModalIcon}
                _hover={{
                  backgroundColor: 'secondary.300',
                }}
              />
              <Text {...style.commonText}>Join using</Text>
              <HStack {...style.smButtonsContainer}>
                <IconButton
                  icon={<GoogleSMLogo />}
                  onPressIn={props.onGoogleLogin}
                  {...style.iconButton}
                />
                <IconButton
                  icon={<LinkedInSMLogo />}
                  onPressIn={props.onLinkedInLogin}
                  {...style.iconButton}
                />

                {props.isCandidate && (
                  <IconButton
                    icon={<FacebookSMLogo />}
                    onPressIn={props.onFacebookLogin}
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
                  label="Full Name"
                  name="fullName"
                  tooltip={props.tooltip?.fullName}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: '',
                      max: 255,
                    },
                  ]}
                >
                  <Input
                    type="text"
                    style={style.input}
                    placeholder={props.placeholder?.fullName}
                    suffix={' '}
                  />
                </Form.Item>
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
                <Form.Item
                  name="termsAndCondition"
                  rules={[{ validator: validation }]}
                >
                  <Checkbox checked={checked} onChange={onCheckboxChange}>
                    <span
                      // eslint-disable-next-line react-native/no-inline-styles
                      style={{
                        color: checked ? '#111111' : '#EB5757',
                      }}
                    >
                      {props.termAndConditionValues.fieldName}
                    </span>
                  </Checkbox>
                </Form.Item>
                <CustomButton {...style.submitButton} htmlType="submit">
                  {props.buttonText}
                </CustomButton>
              </Form>
              <Text {...style.commonText}>
                {props.termAndConditionValues.text}
                <Text
                  {...style.registerText}
                  onPress={props.onTermsAndCondition}
                >
                  {' '}
                  {props.termAndConditionValues.linkText}
                </Text>
              </Text>
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
  unoLogo: <UnojobsAppLogo />,
  tooltip: {
    fullName: 'Required',
    email: 'Required',
    password: 'Required',
    confirmPassword: 'Required',
  },
  buttonText: 'Join Us',
  placeholder: {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  },
  verticalSpace: 30,
  maxWidth: 500,
  maxHeight: 500,
  onClose: undefined,
  onTermsAndCondition: undefined,
  termAndConditionValues: {
    fieldName: 'Terms & conditions',
    linkText: 'Terms & Conditions',
    text: 'By clicking on join us you agree to our',
  },
};
