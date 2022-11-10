import React, { useEffect, useState } from 'react';
import { Form, Input } from 'antd';
import { IconButton, Modal } from '../../../composites';
import { HStack, Text, VStack } from '../../../primitives';
import { CustomButton } from '../../CustomButton';
import { passwordValidator, preventCopyPaste } from '../helper.authentication';
import { style } from '../style.authentication';
import '../styles.authentication.css';
import { LeftArrowIcon, UnojobsAppLogo } from '../../UnojobsIcons';
import type { IUnoNewPasswordProps } from './types';

export const UnoNewPasswordModal = (props: IUnoNewPasswordProps) => {
  const [form] = Form.useForm();
  const [passwordError, setPasswordError] = useState<string | undefined>('');

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
            <VStack {...style.mainContainer}>
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
              {(props.heading || props.subHeading) && (
                <VStack>
                  {props.heading && (
                    <Text {...style.heading}>{props.heading}</Text>
                  )}
                  {props.subHeading && (
                    <Text {...style.subHeading}>{props.subHeading} </Text>
                  )}
                </VStack>
              )}
              <Form
                form={form}
                layout="vertical"
                onFinish={props.onCreate}
                scrollToFirstError={true}
                requiredMark={false}
                autoComplete={'off'}
                className="ant-form-wrapper-ui"
              >
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
UnoNewPasswordModal.defaultProps = {
  title: '',
  heading: '',
  subHeading: '',
  onCreate: undefined,
  tooltip: {
    password: 'Required',
    confirmPassword: 'Required',
  },
  buttonText: 'Create New Password',
  placeholder: {
    password: '',
    confirmPassword: '',
  },
  verticalSpace: 30,
  maxWidth: 500,
  maxHeight: 500,
  onClose: undefined,
  unoLogo: <UnojobsAppLogo />,
  isOpened: false,
  setIsOpened: undefined,
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
  },
};
