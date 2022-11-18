import React, { useEffect, useState } from 'react';
import { Form, Input, Popconfirm } from 'antd';
import { Center, IconButton, Modal } from '../../../composites';
import { HStack, Spinner, Text, VStack } from '../../../primitives';
import { CustomButton } from '../../CustomButton';
import { style } from '../style.authentication';
import type {
  IForgotPasswordFormValuesProps,
  IUnoForgetPasswordModalProps,
} from './types';
import '../styles.authentication.css';
import { LeftArrowIcon, UnojobsAppLogo } from '../../UnojobsIcons';

export const UnoForgetPasswordModal = (props: IUnoForgetPasswordModalProps) => {
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

  const handleForgotPasswordFormSubmit = (
    values: IForgotPasswordFormValuesProps
  ) => {
    props.onSubmit?.({
      ...values,
      role: props.isAdmin
        ? 'super_admin'
        : props.isCandidate
        ? 'candidate'
        : 'org_admin',
    });
  };

  return (
    <Center>
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
                <Popconfirm
                  placement={props.popover?.placement}
                  title={props.popover?.text}
                  okText={props.popover?.confirmText}
                  cancelText={props.popover?.cancelText}
                  open={show}
                  onConfirm={props.loading ? undefined : handleModalClose}
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
                form={form}
                layout="vertical"
                onFinish={handleForgotPasswordFormSubmit}
                scrollToFirstError={true}
                requiredMark={false}
                autoComplete={'off'}
                className="ant-form-wrapper-ui"
                disabled={props.loading ? true : false}
              >
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
    </Center>
  );
};
UnoForgetPasswordModal.defaultProps = {
  heading: '',
  subHeading: '',
  title: '',
  onSubmit: undefined,
  isOpened: false,
  setIsOpened: undefined,
  unoLogo: <UnojobsAppLogo />,
  buttonText: 'Send an email',
  tooltip: {
    email: 'Required',
  },
  placeholder: {
    email: '',
  },
  verticalSpace: 30,
  maxWidth: 500,
  maxHeight: 620,
  onClose: undefined,
  showBackArrow: true,
  backArrowMarginTop: 35,
  backArrowMarginBottom: 26,
  backArrowMarginLeft: 5,
  backArrowMarginRight: 'auto',
  errors: {
    email: {
      required: 'required field',
      validation: 'must be a valid email',
    },
  },
  isResetOnSubmit: false,
  loading: false,
  loaderColor: 'secondary.300',
  loaderSize: 'sm',
  isCandidate: false,
  isAdmin: false,
  popover: {
    text: 'Changes that you made may not be saved.',
    cancelText: 'Cancel',
    confirmText: 'Leave',
    placement: 'right',
  },
};
