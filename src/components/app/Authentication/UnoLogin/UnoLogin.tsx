import React from 'react';
import { Form, Input } from 'antd';
import { HStack, Text, VStack } from '../../../primitives';
import { style } from '../style.authentication';
import { SelectableRadioButton } from '../../SelectableRadioButton';
import { CustomButton } from '../../CustomButton';
import {
  FacebookSMLogo,
  GoogleSMLogo,
  LinkedInSMLogo,
  UnojobsAppLogo,
} from '../../UnojobsIcons';
import { IconButton } from '../../../composites';
import type { IUnoLoginProps } from './types';
import '../styles.authentication.css';
import { emailValidator, preventCopyPaste } from '../helper.authentication';

export const UnoLogin = (props: IUnoLoginProps) => {
  return (
    <VStack {...style.mainContainer} space={props.verticalSpace}>
      <VStack>
        {props.unoLogo}
        <Text {...style.heading} fontFamily={'body'}>
          {props.heading}
        </Text>
      </VStack>
      <Form
        layout="vertical"
        onFinish={props.onLogin}
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
            initialValue={props.isCandidate ? 'Candidate' : 'Employer'}
            style={style.userType}
          >
            <SelectableRadioButton
              list={['Employer', '`Candidate`']}
              size="medium"
              // eslint-disable-next-line react-native/no-inline-styles
              userStyle={{
                width: 400,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
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
          <Text {...style.commonText}>Or {props.buttonText} With</Text>
          <HStack {...style.smButtonsContainer}>
            <IconButton
              icon={<GoogleSMLogo />}
              onPressIn={props.onGoogleLogin}
              {...style.iconButton}
            />
            <IconButton
              icon={<LinkedInSMLogo />}
              onPressIn={props.onLinkedInLogin}
              {...style.iconButton}
            />

            {props.isCandidate && (
              <IconButton
                icon={<FacebookSMLogo />}
                onPressIn={props.onFacebookLogin}
                {...style.iconButton}
              />
            )}
          </HStack>
          <Text {...style.commonText}>
            Don't have any account?
            <Text {...style.registerText} onPress={props.onRegister}>
              {' '}
              Register
            </Text>
          </Text>
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
  unoLogo: <UnojobsAppLogo />,
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
  verticalSpace: 30,
};
