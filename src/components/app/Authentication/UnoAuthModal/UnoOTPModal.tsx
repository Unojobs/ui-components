import React, { useEffect } from 'react';
import { Form } from 'antd';
import { IconButton, Modal } from '../../../composites';
import { HStack, Spinner, Text, VStack } from '../../../primitives';
import { CustomButton } from '../../CustomButton';
import OtpInput from 'react-otp-input';
import { style } from '../style.authentication';
import type { IUnoOTPModalProps } from './types';
import '../styles.authentication.css';
import { LeftArrowIcon, UnojobsAppLogo } from '../../UnojobsIcons';

export const UnoOTPModal = (props: IUnoOTPModalProps) => {
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

  /** handle reset form values */
  useEffect(() => {
    form.resetFields();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
              {(props.title || props.unoLogo) && (
                <Text {...style.heading} textAlign="center">
                  <HStack space={30}>
                    {props.unoLogo}
                    {props.title}
                  </HStack>
                </Text>
              )}
              {props.showBackArrow && (
                <IconButton
                  onPressIn={props.loading ? undefined : handleModalClose}
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
              {(props.heading || props.subHeading) && (
                <VStack>
                  {props.heading && (
                    <Text {...style.heading}>{props.heading}</Text>
                  )}
                  {props.subHeading && (
                    <Text {...style.subHeading}>
                      {props.subHeading}
                      <Text fontWeight={'extraBlack'} fontSize={'lg'}>
                        {' '}
                        {props.smsSentOn}
                      </Text>
                    </Text>
                  )}
                </VStack>
              )}

              <Form
                form={form}
                layout="vertical"
                onFinish={props.onVerify}
                scrollToFirstError={true}
                requiredMark={false}
                autoComplete={'off'}
                className="ant-form-wrapper-ui"
              >
                <Form.Item
                  label={props.label}
                  name="otp"
                  rules={[
                    {
                      required: true,
                      min: 6,
                      max: 6,
                      message: props.errors?.otp,
                    },
                  ]}
                >
                  <OtpInput
                    inputStyle={style.otpInputStyle}
                    separator={<span style={style.otpSeperatorStyle} />}
                    numInputs={6}
                    isInputNum={true}
                    isInputSecure={props.isInputSecure}
                    errorStyle={style.otpErrorInput}
                    hasErrored={props.hasErrored}
                    isDisabled={props.loading ? true : false}
                  />
                </Form.Item>

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
              {props.isResend && (
                <Text
                  {...style.resendText}
                  {...style.commonText}
                  marginTop={0}
                  onPress={props.loading ? undefined : props.onResendOTP}
                >
                  Resend OTP
                </Text>
              )}
            </VStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};
UnoOTPModal.defaultProps = {
  heading: '',
  subHeading: '',
  hasErrored: false,
  isInputSecure: false,
  title: '',
  label: '',
  onVerify: undefined,
  unoLogo: <UnojobsAppLogo />,
  buttonText: 'Verify',
  isOpened: false,
  setIsOpened: undefined,
  verticalSpace: 30,
  maxWidth: 500,
  maxHeight: 620,
  onClose: undefined,
  smsSentOn: '',
  onResendOTP: undefined,
  isResend: false,
  showBackArrow: true,
  backArrowMarginTop: 35,
  backArrowMarginBottom: 26,
  backArrowMarginLeft: 5,
  backArrowMarginRight: 'auto',
  errors: {
    otp: 'required field',
  },
  isResetOnSubmit: true,
  loading: false,
  loaderColor: 'secondary.300',
  loaderSize: 'sm',
};
