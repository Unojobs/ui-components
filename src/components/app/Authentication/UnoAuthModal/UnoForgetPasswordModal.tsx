import React, { useEffect } from 'react';
import { Form, Input } from 'antd';
import { Center, IconButton, Modal } from '../../../composites';
import { HStack, Text, VStack } from '../../../primitives';
import { CustomButton } from '../../CustomButton';
import { style } from '../style.authentication';
import type { IUnoForgetPasswordModalProps } from './types';
import { emailValidator } from '../helper.authentication';
import '../styles.authentication.css';
import {
  LeftArrowIcon,
  UnoEmailIcon,
  UnojobsAppLogo,
} from '../../UnojobsIcons';

export const UnoForgetPasswordModal = (props: IUnoForgetPasswordModalProps) => {
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
                    <Text {...style.subHeading}>{props.subHeading}</Text>
                  )}
                </VStack>
              )}
              <Form
                form={form}
                layout="vertical"
                onFinish={props.onSubmit}
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
                    suffix={<UnoEmailIcon />}
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
  maxHeight: 540,
  onClose: undefined,
  showBackArrow: true,
  backArrowMarginTop: 35,
  backArrowMarginBottom: 26,
  backArrowMarginLeft: 5,
  backArrowMarginRight: 'auto',
};
