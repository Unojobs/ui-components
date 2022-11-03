import React from 'react';
import { Form, Input } from 'antd';
import { Text, VStack } from '../../../primitives';
import { style } from '../style.authentication';
import { CustomButton } from '../../CustomButton';
import { IconButton } from '../../../composites';
import '../styles.authentication.css';
import type { IUnoResetPasswordProps } from './types';
import { passwordValidator, preventCopyPaste } from '../helper.authentication';
import { LeftArrowIcon } from '../../UnojobsIcons';

export const UnoResetPassword = (props: IUnoResetPasswordProps) => {
  return (
    <VStack {...style.mainContainer}>
      <IconButton
        icon={
          <>
            <LeftArrowIcon size={10} />
          </>
        }
        onPress={props.onBackArrow}
        _hover={{
          backgroundColor: 'secondary.300',
        }}
        {...style.backIconButton}
        {...style.backArrowIcon}
      />
      {(props.heading || props.subHeading) && (
        <VStack>
          {props.heading && <Text {...style.heading}>{props.heading}</Text>}
          {props.subHeading && (
            <Text {...style.subHeading}>{props.subHeading} </Text>
          )}
        </VStack>
      )}
      <Form
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
              message: '',
            },
            {
              validator: (_, value) => passwordValidator(value),
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
  );
};

UnoResetPassword.defaultProps = {
  heading: '',
  subHeading: '',
  onCreate: undefined,
  onBackArrow: undefined,
  tooltip: {
    password: 'Required',
    confirmPassword: 'Required',
  },
  buttonText: 'Create New Password',
  placeholder: {
    password: '',
    confirmPassword: '',
  },
};
