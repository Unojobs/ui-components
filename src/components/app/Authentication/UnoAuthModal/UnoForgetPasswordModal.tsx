import React from 'react';

import { Form, Input } from 'antd';
import { IconButton, Modal } from '../../../composites';
import { HStack, Text, VStack } from '../../../primitives';
import { CustomButton } from '../../CustomButton';
import { style } from '../style.authentication';
import { BackArrowIcon, UnojobsLogo } from '../../Icons';
import type { IUnoForgetPasswordModalProps } from './types';

export const UnoForgetPasswordModal = (props: IUnoForgetPasswordModalProps) => {
  // const [visible, setVisible] = useState<boolean>(false);
  // const onFinish = (values: any) => {
  //   console.warn('Success:', values);
  //   setVisible(false);
  // };

  const onFinishFailed = (errorInfo: any) => {
    console.warn('Failed:', errorInfo);
  };

  return (
    <>
      <Modal
        isOpen={props.isOpened}
        onClose={() => props.setIsOpened(false)}
        safeAreaTop={true}
        closeOnOverlayClick={false}
      >
        <Modal.Content {...style.modalPosition}>
          {/* <Modal.CloseButton /> */}
          <IconButton
            icon={<BackArrowIcon />}
            onPress={() => props.setIsOpened(false)}
            _hover={{
              backgroundColor: '#ffffff',
            }}
            {...style.backIconButton}
            {...style.backArrowModalIcon}
          />
          <Modal.Body>
            <VStack {...style.mainContainer}>
              <Text {...style.heading} textAlign="center" fontFamily={'body'}>
                <HStack space={8}>
                  {props.unoLogo}
                  {props.title}
                </HStack>
              </Text>
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
                onFinish={props.onSubmit}
                onFinishFailed={onFinishFailed}
                scrollToFirstError={true}
                requiredMark={false}
                autoComplete={'off'}
              >
                <Form.Item
                  label="Email"
                  name="email"
                  tooltip="This is a required field. e.g, abc@abc.com"
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: '',
                    },
                    {
                      // message: 'should be a valid email',
                      validator: (_, value) => {
                        if (/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(value)) {
                          return Promise.resolve();
                        } else {
                          return Promise.reject();
                        }
                      },
                    },
                  ]}
                >
                  <Input
                    type="email"
                    placeholder="type here"
                    style={style.input}
                    suffix={' '}
                  />
                </Form.Item>

                <CustomButton {...style.submitButton} htmlType="submit">
                  Submit
                </CustomButton>
              </Form>
            </VStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};
UnoForgetPasswordModal.defaultProps = {
  heading: '',
  subHeading: '',
  title: '',
  onSubmit: undefined,
  setIsOpen: false,
  setIsOpened: undefined,
  unoLogo: <UnojobsLogo />,
};
