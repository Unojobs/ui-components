import React from 'react';
import { Form } from 'antd';
import { IconButton, Modal } from '../../../composites';
import { HStack, Text, VStack } from '../../../primitives';
import { CustomButton } from '../../CustomButton';
import OtpInput from 'react-otp-input';
import { style } from '../style.authentication';
import { BackArrowIcon } from '../../Icons';
import type { IUnoOTPModalProps } from './types';
import '../styles.authentication.css';

export const UnoOTPModal = (props: IUnoOTPModalProps) => {
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
                onFinish={props.onVerify}
                scrollToFirstError={true}
                requiredMark={false}
                autoComplete={'off'}
                className="ant-form-wrapper-ui"
              >
                <Form.Item
                  label={props.label}
                  name="OTP"
                  rules={[{ required: true, min: 6, max: 6 }]}
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
  unoLogo: undefined,
  buttonText: 'Verify',
  isOpened: false,
  setIsOpened: undefined,
};
