import React from 'react';
import { Form, Input } from 'antd';
import { HStack, Text, VStack } from '../../../primitives';
import { style } from '../style.authentication';
import { SelectableRadioButton } from '../../SelectableRadioButton';
import { CustomButton } from '../../CustomButton';
import {
  FacebookLogo,
  Google as GoogleLogo,
  Linkedin as LinkedInLogo,
  UnojobsLogo,
} from '../../Icons';
import { IconButton } from '../../../composites';
import type { IUnoLoginProps } from './types';
import '../styles.authentication.css';
import { emailValidator, preventCopyPaste } from '../helper.authentication';

export const UnoLogin = (props: IUnoLoginProps) => {
  //form submit fail
  const onFinishFailed = (errorInfo: any) => {
    console.warn('Failed:', errorInfo);
  };

  return (
    <VStack {...style.mainContainer}>
      <VStack>
        {props.unoLogo}
        <Text {...style.heading} fontFamily={'body'}>
          {props.heading}
        </Text>
      </VStack>
      <Form
        layout="vertical"
        onFinish={props.onLogin}
        onFinishFailed={onFinishFailed}
        scrollToFirstError={true}
        requiredMark={false}
        autoComplete={'off'}
        className="ant-form-wrapper-ui"
      >
        {!props.isAdmin && (
          <Form.Item
            label="Please first select you as what here?"
            name="userType"
            rules={[
              {
                required: true,
                whitespace: true,
                message: '',
              },
            ]}
            initialValue="Employer"
            style={style.userType}
          >
            <SelectableRadioButton
              list={['Employer', 'Candidate']}
              size="medium"
              space={60}
              initialValue={'Employer'}
              onChange={(value: string) => {
                if (value.toLowerCase() === 'candidate') {
                  props.setIsCandidate(true);
                } else {
                  props.setIsCandidate(false);
                }
              }}
            />
          </Form.Item>
        )}
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
              // message: 'should be a valid email',
              validator: (_, value) => emailValidator(value),
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
          ]}
        >
          <Input.Password
            placeholder={props.placeholder?.password}
            style={style.input}
            onPaste={preventCopyPaste}
            onCopy={preventCopyPaste}
          />
        </Form.Item>
        <Text
          {...style.forgetText}
          {...style.commonText}
          onPress={props.onForgetPassword}
        >
          Forgot Password?
        </Text>
        <CustomButton {...style.submitButton} htmlType="submit">
          {props.buttonText}
        </CustomButton>
      </Form>
      {!props.isAdmin && (
        <>
          <Text {...style.commonText}>
            Don't have any account?
            <Text {...style.registerText} onPress={props.onRegister}>
              {' '}
              Register
            </Text>
          </Text>
          <Text {...style.commonText}>Or {props.buttonText} With</Text>
          <HStack {...style.smButtonsContainer}>
            <IconButton
              icon={<GoogleLogo />}
              onPress={props.onGoogleLogin}
              {...style.iconButton}
            />
            <IconButton
              icon={<LinkedInLogo />}
              onPress={props.onLinkedInLogin}
              {...style.iconButton}
            />

            {props.isCandidate && (
              <IconButton
                icon={<FacebookLogo />}
                onPress={props.onFacebookLogin}
                {...style.iconButton}
              />
            )}
          </HStack>
        </>
      )}
    </VStack>
  );
};

UnoLogin.defaultProps = {
  heading: '',
  isAdmin: false,
  onForgetPassword: undefined,
  onRegister: undefined,
  onGoogleLogin: undefined,
  onLinkedInLogin: undefined,
  onFacebookLogin: undefined,
  onLogin: undefined,
  unoLogo: <UnojobsLogo />,
  isCandidate: false,
  setIsCandidate: undefined,
  tooltip: {
    email: 'Required',
    password: 'Required',
  },
  placeholder: {
    email: '',
    password: '',
  },
  buttonText: 'Login',
};
