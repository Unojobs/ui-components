import React, { useEffect, useState } from 'react';
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
  UnoEmailIcon,
  UnojobsAppLogo,
} from '../../UnojobsIcons';
import type { RuleObject } from 'antd/lib/form';

export const UnoRegisterModal = (props: IUnoUserRegisterProps) => {
  const [checked, setChecked] = useState<boolean>(false);
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
                    suffix={<UnoEmailIcon />}
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
                {props.termAndConditionValues?.showCheckBox && (
                  <Form.Item
                    name="termsAndCondition"
                    rules={[{ validator: validation }]}
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
  maxHeight: 500,
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
};
