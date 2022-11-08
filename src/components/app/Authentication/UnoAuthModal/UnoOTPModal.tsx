import React from 'react';
import { Form } from 'antd';
import { IconButton, Modal } from '../../../composites';
import { HStack, Text, VStack } from '../../../primitives';
import { CustomButton } from '../../CustomButton';
import OtpInput from 'react-otp-input';
import { style } from '../style.authentication';
import type { IUnoOTPModalProps } from './types';
import '../styles.authentication.css';
import { LeftArrowIcon, UnojobsAppLogo } from '../../UnojobsIcons';

export const UnoOTPModal = (props: IUnoOTPModalProps) => {
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
              {(props.title || props.unoLogo) && (
                <Text {...style.heading} textAlign="center">
                  <HStack space={8}>
                    {props.unoLogo}
                    {props.title}
                  </HStack>
                </Text>
              )}
              <IconButton
                icon={<LeftArrowIcon size={6} />}
                onPressIn={props.onClose}
                {...style.backIconButton}
                {...style.backArrowModalIcon}
                _hover={{
                  backgroundColor: 'secondary.300',
                }}
              />
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
                layout="vertical"
                onFinish={props.onVerify}
                scrollToFirstError={true}
                requiredMark={false}
                autoComplete={'off'}
                className="ant-form-wrapper-ui"
              >
                {props.isResend && (
                  <Text
                    {...style.forgetText}
                    {...style.commonText}
                    marginTop={0}
                    onPress={props.onResendOTP}
                  >
                    Resend OTP
                  </Text>
                )}
                <Form.Item
                  label={props.label}
                  name="otp"
                  rules={[
                    {
                      required: true,
                      min: 6,
                      max: 6,
                      message: 'OTP is required',
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
  maxHeight: 500,
  onClose: undefined,
  smsSentOn: '',
  onResendOTP: undefined,
  isResend: false,
};
