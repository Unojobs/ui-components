import React, { useState } from 'react';

import { Form, Input } from 'antd';
import { Modal } from '../../../composites';
import { Text } from '../../../primitives';
import { CustomButton } from '../../CustomButton';
import { passwordValidator, preventCopyPaste } from '../helper.authentication';
import { style } from '../style.authentication';

export const UnoAuthModal = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const onFinish = (values: any) => {
    console.warn('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.warn('Failed:', errorInfo);
  };

  return (
    <>
      <button onClick={() => setVisible(true)}>hhd</button>
      <Modal
        isOpen={visible}
        onClose={() => setVisible(false)}
        marginTop="200px"
      >
        <Modal.Content maxWidth="500px">
          <Modal.CloseButton />
          <Modal.Body>
            <Form
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              scrollToFirstError={true}
              requiredMark={false}
              autoComplete={'off'}
            >
              <Text {...style.commonText}>Join using</Text>
              <Text {...style.commonText}>Join using</Text>
              <Text {...style.commonText}>Or</Text>
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
              <Form.Item
                label="Password"
                name="password"
                tooltip="must contain uppercase, lowercase, number, special & min length of 10 characters"
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
                  placeholder="Enter your password"
                  style={style.input}
                  onPaste={preventCopyPaste}
                  onCopy={preventCopyPaste}
                />
              </Form.Item>
              <Form.Item
                name="confirmPassword"
                label="Confirm Password"
                dependencies={['password']}
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
                  placeholder="Please confirm your password"
                  style={style.input}
                  onPaste={preventCopyPaste}
                  onCopy={preventCopyPaste}
                />
              </Form.Item>
              <CustomButton {...style.submitButton} htmlType="submit">
                Submit
              </CustomButton>
            </Form>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};
UnoAuthModal.defaultProps = {
  type: 'OTP-verification',
  isOpen: true,
};
