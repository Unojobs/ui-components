import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Card, Carousel, Typography, Form, Input, Image, Checkbox } from 'antd';
import { GoogleOutlined, LinkedinFilled } from '@ant-design/icons';
import './LoginStyle.css';
import { CustomButton, SelectableRadioButton } from 'src';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { UnojobsLogo } from 'src';
export interface ILoginProps {
  type?:
    | 'login-home'
    | 'forget-password'
    | 'OTP-verification'
    | 'new-password'
    | 'create-account';
  loginButton(): string;
  loginWithGoogle(): string;
  loginWithLinkedin(): string;
  heading: string;
  subHeading: string;
  backButton(): string;
}
export const Login = (props: ILoginProps) => {
  const {
    heading,
    type,
    backButton,
    subHeading,
    loginButton,
    loginWithGoogle,
    loginWithLinkedin,
  } = props;
  const [userName, setUserName] = useState();
  const [userNameType, setUserNameType] = useState('');
  const validateMessages = {
    required: "'${name}' is required!",
  };
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  console.log(userName);

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const { Text } = Typography;
  return (
    <div className="parent">
      <div className="carouselDiv" style={{}}>
        <Carousel autoplay>
          <Image
            preview={false}
            height="100vh"
            width="100%"
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <Image
            preview={false}
            height="100vh"
            width="100%"
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <Image
            preview={false}
            height="100vh"
            width="100%"
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Carousel>
      </div>
      {type === 'login-home' ? (
        <div className="cardDiv">
          <Card className="cardStyle">
            <div className="formParent">
              <div className="topContent">
                <UnojobsLogo></UnojobsLogo>
                <h1 className="mainHeading">{heading}</h1>
                <Text>{subHeading}</Text>
              </div>
              <div className="mainContent">
                <Form
                  layout="vertical"
                  validateMessages={validateMessages}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item name="user type" rules={[{ required: true }]}>
                    <div>
                      <SelectableRadioButton
                        onChange={(e: string) => {
                          console.log(e);
                        }}
                        size="small"
                        space={30}
                        list={['Employer', 'Candidate']}
                        initialValue="Employer"
                      ></SelectableRadioButton>
                    </div>
                  </Form.Item>

                  <Form.Item
                    name={userNameType === 'number' ? 'number' : 'email'}
                    label="Email/Phone Number"
                    rules={[{ required: true }]}
                  >
                    <Input
                      type={userNameType === 'number' ? 'number' : 'email'}
                      className="username"
                      onChange={(e: any) => {
                        const intVal: any = parseInt(e.currentTarget.value);
                        const isInnt = Number.isInteger(intVal);
                        setUserName(e.currentTarget.value);
                        if (isInnt) {
                          setUserNameType('number');
                        } else {
                          setUserNameType('email');
                        }
                      }}
                      placeholder="Input your email or phone number"
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    label="Password"
                    rules={[{ required: true, min: 8 }]}
                  >
                    <Input.Password
                      className="password"
                      placeholder="Input your password"
                    />
                  </Form.Item>
                  <div className="forgetPasswordDiv">
                    <span className="forgetPassword">Forget Password</span>
                  </div>

                  <Form.Item>
                    <CustomButton
                      htmlType="submit"
                      width={'350px'}
                      onClick={() => {
                        loginButton();
                      }}
                    >
                      Login
                    </CustomButton>
                  </Form.Item>
                </Form>
                <div className="formFooter">
                  <div>
                    <span>Or Login With</span>
                  </div>
                  <div className="socialLogin">
                    <CustomButton
                      onClick={() => loginWithGoogle()}
                      backgroundColor="#D9E6FD"
                      color="#111111"
                      icon={<GoogleOutlined color="blue" />}
                    >
                      Gmail
                    </CustomButton>

                    <CustomButton
                      onClick={() => loginWithLinkedin()}
                      backgroundColor="#D9E6FD"
                      color="#111111"
                      icon={<LinkedinFilled />}
                    >
                      Linedin
                    </CustomButton>
                  </div>
                  <div>
                    <span>Don't have any account?</span>
                    <span className="register">Register</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ) : type === 'OTP-verification' ? (
        <div className="cardDiv">
          <Card className="cardStyle">
            <div
              className="formParent"
              style={{ paddingTop: type === 'OTP-verification' ? '15%' : '5%' }}
            >
              <div className="topContent">
                <ArrowLeftOutlined
                  style={{ fontSize: '25px' }}
                  onClick={() => backButton()}
                />
                <h1 className="mainHeading">Verification-OTP</h1>
                <Text>Please check your email</Text>
              </div>
              <div className="mainContent">
                <Form
                  layout="vertical"
                  validateMessages={validateMessages}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <span className="otpLable">Input your OTP code</span>
                  <div className="otpDiv">
                    <Form.Item name="otp1" rules={[{ required: true }]}>
                      <Input type="number" className="otpInput" />
                    </Form.Item>
                    <Form.Item name="otp2" rules={[{ required: true }]}>
                      <Input type="number" className="otpInput" />
                    </Form.Item>
                    <Form.Item name="otp3" rules={[{ required: true }]}>
                      <Input type="number" className="otpInput" />
                    </Form.Item>
                    <Form.Item name="otp 4" rules={[{ required: true }]}>
                      <Input type="number" className="otpInput" />
                    </Form.Item>
                  </div>

                  <Form.Item>
                    <CustomButton
                      htmlType="submit"
                      width={'100%'}
                      onClick={() => {
                        loginButton();
                      }}
                    >
                      Submit
                    </CustomButton>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </Card>
        </div>
      ) : type === 'new-password' ? (
        <div className="cardDiv">
          <Card className="cardStyle">
            <div
              className="formParent"
              style={{ paddingTop: type === 'new-password' ? '15%' : '5%' }}
            >
              <div className="topContent">
                <ArrowLeftOutlined
                  style={{ fontSize: '25px' }}
                  onClick={() => backButton()}
                />
                <h1 className="mainHeading">Create New Password</h1>
                <p className="newPwDesc">
                  The password must consist of 8 characters with a combination
                  of letters and number.
                </p>
              </div>
              <div className="mainContent">
                <Form
                  layout="vertical"
                  validateMessages={validateMessages}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    name="New Password"
                    label="New Password"
                    rules={[{ required: true, min: 8 }]}
                  >
                    <Input.Password
                      className="password"
                      placeholder="Input your email or phone number"
                    />
                  </Form.Item>{' '}
                  <Form.Item
                    name="Confirm New Password"
                    label="Confirm New Password"
                    rules={[{ required: true, min: 8 }]}
                  >
                    <Input.Password
                      className="password"
                      placeholder="Input your email or phone number"
                    />
                  </Form.Item>
                  <Form.Item>
                    <CustomButton
                      htmlType="submit"
                      width={'100%'}
                      onClick={() => {
                        loginButton();
                      }}
                    >
                      Submit
                    </CustomButton>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </Card>
        </div>
      ) : type === 'create-account' ? (
        <div className="cardDivCreateAc">
          <Card className="cardStyleCreateAc">
            <div
              className={
                type === 'create-account' ? 'formParentCreateAc' : 'formParent'
              }
            >
              <div className="topContent">
                <ArrowLeftOutlined
                  style={{ fontSize: '25px' }}
                  onClick={() => backButton()}
                />
                <div className="createActop">
                  <h1 className="mainHeading">Create Your Account</h1>
                  <Text className="createAcSubheading">
                    Input your information first
                  </Text>
                </div>
              </div>
              <div className="mainContent">
                <Form
                  layout="vertical"
                  validateMessages={validateMessages}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    name="Company Name"
                    label="Company Name"
                    rules={[{ required: true }]}
                  >
                    <Input
                      type="text"
                      className="username"
                      onChange={(e: any) => {
                        setUserName(e.currentTarget.value);
                      }}
                      placeholder="Input your company name"
                    />
                  </Form.Item>
                  <Form.Item
                    name="First Name"
                    label="First Name"
                    rules={[{ required: true }]}
                  >
                    <Input
                      type="text"
                      className="username"
                      onChange={(e: any) => {
                        setUserName(e.currentTarget.value);
                      }}
                      placeholder="Input your first name"
                    />
                  </Form.Item>
                  <Form.Item
                    name="Last Name"
                    label="Last Name"
                    rules={[{ required: true }]}
                  >
                    <Input
                      type="text"
                      className="username"
                      placeholder="Input your last name"
                      onChange={(e: any) => {
                        setUserName(e.currentTarget.value);
                      }}
                    />
                  </Form.Item>
                  <Form.Item
                    name="Email"
                    label="Email"
                    rules={[{ required: true }]}
                  >
                    <Input
                      type="email"
                      className="username"
                      onChange={(e: any) => {
                        setUserName(e.currentTarget.value);
                      }}
                      placeholder="Input your email"
                    />
                  </Form.Item>
                  <Form.Item
                    name="Phoen Number"
                    label="Phoen Number"
                    rules={[{ required: true }]}
                  >
                    <Input
                      type="text"
                      className="username"
                      onChange={(e: any) => {
                        setUserName(e.currentTarget.value);
                      }}
                      placeholder="Input your Phoen Number"
                    />
                  </Form.Item>
                  <Form.Item
                    name="New Password"
                    label="New Password"
                    rules={[{ required: true, min: 8 }]}
                  >
                    <Input.Password
                      className="password"
                      placeholder="Input your email or phone number"
                    />
                  </Form.Item>{' '}
                  <Form.Item
                    name="Confirm New Password"
                    label="Confirm New Password"
                    rules={[{ required: true, min: 8 }]}
                  >
                    <Input.Password
                      className="password"
                      placeholder="Input your email or phone number"
                    />
                  </Form.Item>
                  <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                      {
                        validator: (_, value) =>
                          value
                            ? Promise.resolve()
                            : Promise.reject(
                                new Error('accept Terms and Conditions')
                              ),
                      },
                    ]}
                  >
                    <Checkbox>
                      I agree to <a href="">Terms and Conditions</a>
                    </Checkbox>
                  </Form.Item>
                  <Form.Item>
                    <CustomButton
                      htmlType="submit"
                      width={'100%'}
                      onClick={() => {
                        loginButton();
                      }}
                    >
                      Register
                    </CustomButton>
                  </Form.Item>
                </Form>
                <div className="formFooter">
                  <div>
                    <span>Already have an account?</span>
                    <span className="register"> Login</span>
                  </div>
                  <div>
                    <span>Or Login With</span>
                  </div>
                  <div className="socialLogin">
                    <CustomButton
                      onClick={() => loginWithGoogle()}
                      backgroundColor="#D9E6FD"
                      color="#111111"
                      icon={<GoogleOutlined color="blue" />}
                    >
                      Gmail
                    </CustomButton>

                    <CustomButton
                      onClick={() => loginWithLinkedin()}
                      backgroundColor="#D9E6FD"
                      color="#111111"
                      icon={<LinkedinFilled />}
                    >
                      Linedin
                    </CustomButton>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ) : (
        <div className="cardDiv">
          <Card className="cardStyle">
            <div
              className="formParent"
              style={{ paddingTop: type === 'forget-password' ? '15%' : '5%' }}
            >
              <div className="topContent">
                <ArrowLeftOutlined
                  style={{ fontSize: '25px' }}
                  onClick={() => backButton()}
                />
                <h1 className="mainHeading">Forgot Password</h1>
                <Text>{subHeading}</Text>
              </div>
              <div className="mainContent">
                <Form
                  layout="vertical"
                  validateMessages={validateMessages}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    name={userNameType === 'number' ? 'number' : 'email'}
                    label="Email/Phone Number"
                    rules={[{ required: true }]}
                  >
                    <Input
                      type={userNameType === 'number' ? 'number' : 'email'}
                      className="username"
                      onChange={(e: any) => {
                        const intVal: any = parseInt(e.currentTarget.value);
                        const isInnt = Number.isInteger(intVal);
                        setUserName(e.currentTarget.value);
                        if (isInnt) {
                          setUserNameType('number');
                        } else {
                          setUserNameType('email');
                        }
                      }}
                      placeholder="Input your email or phone number"
                    />
                  </Form.Item>

                  <Form.Item>
                    <CustomButton
                      htmlType="submit"
                      width={'350px'}
                      onClick={() => {
                        loginButton();
                      }}
                    >
                      Submit
                    </CustomButton>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

Login.defaultProps = {
  heading: 'Welcome to Unojob',
  subHeading: 'Please first select you as what here?',
  loginButton: () => alert('logging'),
  loginWithGoogle: () => alert('login with google'),
  loginWithLinkedin: () => alert('login with facebook'),
  backButton: () => alert('Back button'),
  type: 'login-home',
};
