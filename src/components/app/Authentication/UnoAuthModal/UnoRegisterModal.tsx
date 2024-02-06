import React, { useEffect, useState } from 'react';
import { Checkbox, Form, Input, Popconfirm } from 'antd';
import { IconButton, Modal } from '../../../composites';
import { HStack, Spinner, Text, VStack } from '../../../primitives';
import { CustomButton } from '../../CustomButton';
import { preventCopyPaste } from '../helper.authentication';
import { style } from '../style.authentication';
import type {
  IBackArrowPopoverPlacementType,
  ILoaderSizeType,
  IRegisterFormValuesProps,
  IUnoUserRegisterProps,
} from './types';
import '../styles.authentication.css';
import {
  FacebookSMLogo,
  GoogleSMLogo,
  LeftArrowIcon,
  LinkedInSMLogo,
  UnojobsAppLogo,
} from '../../UnojobsIcons';
import type { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { validatePassword } from './validatePassword';
import { PasswordTooltip } from './PasswordTooltip';
import { AddressSearchInputAntd } from '../../Address';
import { CustomSelect } from '../../Select';
export const UnoRegisterModal = (props: IUnoUserRegisterProps) => {
  const [checked, setChecked] = useState<boolean>(false);
  const [form] = Form.useForm();
  const [show, setShow] = useState<boolean>(false);

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
    props.setIsOpened?.(false);
  };

  /** handle reset form values */
  useEffect(() => {
    form.resetFields();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isOpened]);

  const handleOnGoogleSM = () => {
    form.resetFields();
    props.onGoogleLogin?.();
  };

  const handleOnLinkedInSM = () => {
    form.resetFields();
    props.onLinkedInLogin?.();
  };

  const handleOnFacebookSM = () => {
    form.resetFields();
    props.onFacebookLogin?.();
  };

  /**handle terms and condition using checkbox */

  const onCheckboxChange = (e: CheckboxChangeEvent) => {
    setChecked(e.target.checked);
  };

  /**handle register form submit */
  const handleRegisterFormSubmit = (values: IRegisterFormValuesProps) => {
    props.onRegister?.({
      ...values,
      termsAndCondition: checked,
    });
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
                <Popconfirm
                  placement={props.popover?.placement}
                  title={props.popover?.text}
                  okText={props.popover?.confirmText}
                  cancelText={props.popover?.cancelText}
                  open={show}
                  onConfirm={handleModalClose}
                  onOpenChange={(newOpen: boolean) => setShow(newOpen)}
                  // eslint-disable-next-line react-native/no-inline-styles
                  overlayInnerStyle={{
                    maxWidth: '300px',
                  }}
                >
                  <IconButton
                    onPressIn={props.loading ? undefined : () => setShow(true)}
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
                </Popconfirm>
              )}
              <Text {...style.commonText} {...props.joinTextStyle}>
                {props.isCandidate
                  ? props.joinText ?? 'Join as Candidate'
                  : props.joinText ?? 'Join as Employer'}
              </Text>
              <HStack {...style.smButtonsContainer}>
                <IconButton
                  icon={<GoogleSMLogo />}
                  _hover={style.socialHoverFocus}
                  _focus={style.socialHoverFocus}
                  onPressIn={props.loading ? undefined : handleOnGoogleSM}
                  {...style.iconButton}
                />
                <IconButton
                  icon={<LinkedInSMLogo />}
                  _hover={style.socialHoverFocus}
                  _focus={style.socialHoverFocus}
                  onPressIn={props.loading ? undefined : handleOnLinkedInSM}
                  {...style.iconButton}
                />

                {props.isCandidate && (
                  <IconButton
                    icon={<FacebookSMLogo />}
                    _hover={style.socialHoverFocus}
                    _focus={style.socialHoverFocus}
                    onPressIn={props.loading ? undefined : handleOnFacebookSM}
                    {...style.iconButton}
                  />
                )}
              </HStack>
              <Text {...style.commonText}>Or</Text>
              <Form
                form={form}
                layout="vertical"
                onFinish={handleRegisterFormSubmit}
                scrollToFirstError={true}
                requiredMark={false}
                autoComplete={'off'}
                className="ant-form-wrapper-ui"
                disabled={props.loading ? true : false}
              >
                <Form.Item
                  label="Full Name"
                  name="fullName"
                  tooltip={props.tooltip?.fullName}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: props.errors?.fullName?.required,
                    },
                    {
                      max: 250,
                      message: props.errors?.fullName?.validation,
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
                  tooltip={
                    props?.tooltip?.password?.length && (
                      <PasswordTooltip tooltip={props?.tooltip?.password} />
                    )
                  }
                  rules={[
                    {
                      required: true,
                      message: props.errors?.password?.required,
                    },
                    {
                      validator: (_: any, value: any) =>
                        validatePassword(
                          value,
                          props?.errors?.password,
                          props.minCharPassword,
                          props.maxCharPassword
                        ),
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
                <Form.Item
                  name="hearAboutUs"
                  label="How did you hear about us ?"
                  rules={[
                    {
                      required: true,
                      message: 'this is a required field',
                    },
                  ]}
                >
                  <CustomSelect
                    multiple={undefined}
                    selected={props.selected}
                    options={props.options}
                    onChange={(value: any) => {
                      form.setFieldValue('hearAboutUs', value.id);
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name="address"
                  rules={[
                    {
                      required: true,
                      message: 'this is a required field',
                    },
                  ]}
                >
                  <AddressSearchInputAntd
                    name={props.name}
                    label={props.label}
                    placeholder={props.placeholder.address}
                    requiredMark={props.requiredMark}
                    rules={props.rules}
                    subLabel={props.subLabel}
                    disabled={props.disabled}
                    style={props.style}
                    noDivider={props.noDivider}
                    noLabel={props.noLabel}
                    validateStatus={props.validateStatus}
                    help={props.help}
                    onChange={props.onChange}
                    isOrgForm={props.isOrgForm}
                    form={form}
                    updateFormField={props.updateFormField}
                    performPlaceDetailsSearch={props.performPlaceDetailsSearch}
                    locationApiKey={props.locationApiKey}
                    isUserAddress={props.isUserAddress}
                  />
                </Form.Item>
                {props.termAndConditionValues?.showCheckBox && (
                  <Form.Item
                    name="termsAndCondition"
                    validateStatus={checked ? 'success' : 'error'}
                    help={!checked && props.errors?.checkbox}
                  >
                    <Checkbox checked={checked} onChange={onCheckboxChange} />
                    <span>
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
                    </span>
                  </Form.Item>
                )}
                <CustomButton {...style.submitButton} htmlType="submit">
                  {props.loading ? (
                    <Spinner
                      color={props.loaderColor}
                      size={props.loaderSize}
                    />
                  ) : (
                    props.buttonText
                  )}
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
    password: [
      '10 characters',
      'one uppercase letter',
      'one lowercase letter',
      'one number',
      'one special character',
    ],
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
      required: 'Please enter a password',
    },
    confirmPassword: {
      required: 'Please confirm your password',
      validation: "Oops, your passwords don't match",
    },
    email: {
      required: 'Please enter an email',
      validation: 'Please enter a valid email',
    },
    fullName: {
      required: 'Please enter a full name',
      validation: 'Please enter a valid full name',
    },
    checkbox: 'Please accept terms and condition & privacy policy to register',
  },
  isResetOnSubmit: false,
  loading: false,
  loaderColor: 'secondary.300',
  loaderSize: 'sm' as ILoaderSizeType,
  popover: {
    text: 'Changes that you made may not be saved.',
    cancelText: 'Cancel',
    confirmText: 'Leave',
    placement: 'top' as IBackArrowPopoverPlacementType,
  },
};
