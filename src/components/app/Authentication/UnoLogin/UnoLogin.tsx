import React, { useEffect } from 'react';
import { Form, Input } from 'antd';
import { HStack, Spinner, Text, VStack } from '../../../primitives';
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
import type { ILoginFormValue, IUnoLoginProps } from './types';
import '../styles.authentication.css';
import { preventCopyPaste } from '../helper.authentication';

export const UnoLogin = (props: IUnoLoginProps) => {
  const [form] = Form.useForm();

  /** handle reset form values */
  useEffect(() => {
    form.resetFields();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnForgotPassword = () => {
    form.resetFields();
    props.onForgetPassword?.();
  };

  const handleOnRegister = () => {
    form.resetFields();
    props.onRegister?.();
  };
  const handleOnGoogleSM = () => {
    form.resetFields();
    props.onGoogleLogin?.();
  };

  const handleOnLinkedInSM = () => {
    form.resetFields();
    props.onLinkedInLogin?.();
  };

  const handleOnFacebookSM = () => {
    form.resetFields();
    props.onFacebookLogin?.();
  };

  /**handle login form submit */
  const handleLoginFormSubmit = (values: ILoginFormValue) => {
    props.onLogin?.({
      ...values,
      role: props.isAdmin
        ? 'super_admin'
        : props.isCandidate
        ? 'candidate'
        : 'employer',
    });
  };
  return (
    <VStack {...style.mainContainer} space={props.verticalSpace}>
      <VStack>
        {props.unoLogo}
        <Text {...style.heading} fontFamily={'body'}>
          {props.heading}
        </Text>
      </VStack>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleLoginFormSubmit}
        scrollToFirstError={true}
        requiredMark={false}
        autoComplete={'off'}
        className="ant-form-wrapper-ui"
        disabled={props.loading ? true : false}
      >
        {!props.isAdmin && (
          <Form.Item
            label="Please first select you as what here?"
            name="role"
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
              list={['Employer', 'Candidate']}
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

        <Form.Item
          label="Password"
          name="password"
          tooltip={props.tooltip?.password}
          rules={[
            {
              required: true,
              whitespace: true,
              message: props.errors?.password?.required,
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

        <Text {...style.forgetText} {...style.commonText}>
          <Text onPress={props.loading ? undefined : handleOnForgotPassword}>
            Forgot Password?
          </Text>
        </Text>
        <CustomButton
          {...style.submitButton}
          htmlType="submit"
          disable={props.loading ? true : false}
        >
          {props.loading ? (
            <Spinner color={props.loaderColor} size={props.loaderSize} />
          ) : (
            props.buttonText
          )}
        </CustomButton>
      </Form>
      {!props.isAdmin && (
        <>
          <Text {...style.commonText}>Or {props.buttonText} With</Text>
          <HStack {...style.smButtonsContainer}>
            <IconButton
              icon={<GoogleSMLogo />}
              onPressIn={props.loading ? undefined : handleOnGoogleSM}
              {...style.iconButton}
            />
            <IconButton
              icon={<LinkedInSMLogo />}
              onPressIn={props.loading ? undefined : handleOnLinkedInSM}
              {...style.iconButton}
            />

            {props.isCandidate && (
              <IconButton
                icon={<FacebookSMLogo />}
                onPressIn={props.loading ? undefined : handleOnFacebookSM}
                {...style.iconButton}
              />
            )}
          </HStack>
          <Text {...style.commonText}>
            Don't have any account?
            <Text
              {...style.registerText}
              onPress={props.loading ? undefined : handleOnRegister}
            >
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
  errors: {
    email: {
      required: 'required field',
      validation: 'must be a valid email',
    },
    password: {
      required: 'required field',
    },
  },
  loading: false,
  loaderColor: 'secondary.300',
  loaderSize: 'sm',
};
