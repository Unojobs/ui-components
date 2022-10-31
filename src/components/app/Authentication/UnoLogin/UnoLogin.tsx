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
import { preventCopyPaste } from '../helper.authentication';

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
          ]}
        >
          <Input.Password
            placeholder="type here"
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
          Forget Password?
        </Text>
        <CustomButton {...style.submitButton} htmlType="submit">
          Login
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
          <Text {...style.commonText}>Or Login With</Text>
          <HStack {...style.smButtons}>
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
};
