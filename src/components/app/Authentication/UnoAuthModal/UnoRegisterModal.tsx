import React, { useEffect, useState } from 'react';
import { Checkbox, Form, Input } from 'antd';
import { IconButton, Modal } from '../../../composites';
import { HStack, Text, VStack } from '../../../primitives';
import { CustomButton } from '../../CustomButton';
import {
  fullNameValidator,
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
import type { CheckboxChangeEvent } from 'antd/lib/checkbox';

export const UnoRegisterModal = (props: IUnoUserRegisterProps) => {
  const [checked, setChecked] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<string | undefined>('');
  const [fullNameError, setfullNameError] = useState<string | undefined>('');
  const [form] = Form.useForm();

  /** Handle back screen scroll when modal is open */
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

  /**Handle modal close function */

  const handleModalClose = () => {
    form.resetFields();
    props.onClose?.();
  };

  /**handle terms and condition using checkbox */

  const onCheckboxChange = (e: CheckboxChangeEvent) => {
    setChecked(e.target.checked);
  };

  return (
    <>
      <Modal
        isOpen={props.isOpened}
        onClose={handleModalClose}
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
                <HStack space={30}>
                  {props.unoLogo}
                  {props.title}
                </HStack>
              </Text>
              {props.showBackArrow && (
                <IconButton
                  onPressIn={handleModalClose}
                  {...style.backIconButton}
                  marginTop={props.backArrowMarginTop}
                  marginBottom={props.backArrowMarginBottom}
                  marginLeft={props.backArrowMarginLeft}
                  marginRight={props.backArrowMarginRight}
                  _hover={{
                    backgroundColor: 'secondary.300',
                  }}
                  icon={<LeftArrowIcon size={6} />}
                />
              )}
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
                form={form}
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
                      validator: () => {
                        setfullNameError(props.errors?.fullName?.required);
                      },
                    },
                    {
                      validator: (_, value) => {
                        const message = fullNameValidator(
                          value,
                          props.errors?.fullName
                        );

                        setfullNameError(message);
                      },
                    },
                  ]}
                  validateStatus={fullNameError ? 'error' : ''}
                  help={fullNameError}
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
                      message: props.errors?.email?.required,
                    },
                    {
                      type: 'email',
                      message: props.errors?.email?.validation,
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
                      validator: () => {
                        setPasswordError(props.errors?.password?.required);
                      },
                    },
                    ({}) => ({
                      validator(_, value) {
                        const message = passwordValidator(
                          value,
                          props.errors?.password
                        );
                        setPasswordError(message);
                      },
                    }),
                  ]}
                  validateStatus={passwordError ? 'error' : ''}
                  help={passwordError}
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
                      message: props.errors?.confirmPassword?.required,
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(props.errors?.confirmPassword?.validation)
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
                {props.termAndConditionValues?.showCheckBox && (
                  <Form.Item
                    name="termsAndCondition"
                    rules={[
                      {
                        validator: (_, _value) => {
                          if (checked) return Promise.resolve();
                          return Promise.reject(props.errors?.checkbox);
                        },
                      },
                    ]}
                  >
                    <Checkbox checked={checked} onChange={onCheckboxChange} />
                    <Text {...style.commonText} marginLeft={1} fontSize={13}>
                      {props.termAndConditionValues?.text}
                      <Text
                        {...style.registerText}
                        onPress={props.onTermsAndCondition}
                      >
                        {' '}
                        {`${props?.termAndConditionValues?.linkTextOne} `}
                      </Text>
                      {props.termAndConditionValues?.linkTextTwo && (
                        <Text>
                          {'& '}
                          <Text
                            {...style.registerText}
                            onPress={props.onPrivacyPolicy}
                          >
                            {props.termAndConditionValues.linkTextTwo}
                          </Text>
                        </Text>
                      )}
                    </Text>
                  </Form.Item>
                )}
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
  maxHeight: 620,
  onClose: undefined,
  onTermsAndCondition: undefined,
  onPrivacyPolicy: undefined,
  termAndConditionValues: {
    linkTextOne: 'Terms & Conditions',
    linkTextTwo: 'Privacy Policy',
    text: 'I agree to',
    textSize: 13,
    showCheckBox: true,
  },
  showBackArrow: true,
  backArrowMarginTop: 35,
  backArrowMarginBottom: 26,
  backArrowMarginLeft: 5,
  backArrowMarginRight: 'auto',
  errors: {
    password: {
      required: 'required field',
      validation: 'must be a valid password',
    },
    confirmPassword: {
      required: 'required field',
      validation: 'must match with password',
    },
    email: {
      required: 'required field',
      validation: 'must be a valid email',
    },
    fullName: {
      required: 'required field',
      validation: 'must be a valid fullName',
    },
    checkbox: 'accept trems and conditions',
  },
};
