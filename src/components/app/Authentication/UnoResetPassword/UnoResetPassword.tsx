import React from 'react';
import { Form, Input } from 'antd';
import { Text, VStack } from '../../../primitives';
import { style } from '../style.authentication';
import { CustomButton } from '../../CustomButton';
import { IconButton } from '../../../composites';

import '../styles.authentication.css';
import { BackArrowIcon } from '../../Icons';
import type { IUnoResetPasswordProps } from './types';
import { passwordValidator, preventCopyPaste } from '../helper.authentication';

export const UnoResetPassword = (props: IUnoResetPasswordProps) => {
  //form submit success
  const onFinish = (values: any) => {
    console.warn('Success:', values);
  };

  //form submit fail
  const onFinishFailed = (errorInfo: any) => {
    console.warn('Failed:', errorInfo);
  };

  return (
    <VStack {...style.mainContainer}>
      <IconButton
        icon={<BackArrowIcon />}
        onPress={props.onBackArrow}
        _hover={{
          backgroundColor: '#ffffff',
        }}
        {...style.backArrowIcon}
      />
      <div>
        <Text {...style.heading}>{props.heading}</Text>
        <Text {...style.subHeading}>{props.subHeading} </Text>
      </div>
      <Form
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        scrollToFirstError={true}
        requiredMark={false}
        autoComplete={'off'}
      >
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
                  new Error('The two passwords that you entered do not match!')
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
    </VStack>
  );
};

UnoResetPassword.defaultProps = {
  heading: '',
  subHeading: '',
  onSubmit: undefined,
  onBackArrow: undefined,
};
