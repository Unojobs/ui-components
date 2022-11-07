import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Card, Carousel, Typography, Form, Input, Image, Checkbox } from 'antd';
import './LoginStyle.css';
import { CustomButton } from '../../../../../';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Linkedin, Google } from '../../../../../';
import type { LoginProps } from './types';
import { LoginHome } from './LoginHome';
import { NewPassword } from './NewPassword';
export const Login = (props: LoginProps) => {
  const {
    type,
    backButton,
    loginButton,
    loginWithGoogle,
    loginWithLinkedin,
    forgetPassword,
    login,
    images,
  } = props;
  const [emailCheck, setEmailCheck] = useState('');
  const [userType, setUserType] = useState('Employer');
  const [modalType, setModalType] = useState('register');
  const [modalVisible, setModalVisible] = useState(false);
  const [userNameType, setUserNameType] = useState('');
  const validateMessages = {
    required: "'${name}' is required!",
  };

  const validateEmail = (val: string) => {
    var re = /\S+@\S+\.\S+/;
    if (re.test(val) === false) setEmailCheck('error');
    else setEmailCheck('');
  };
  const onFinishFailed = (errorInfo: any) => {
    // console.log('Failed:', errorInfo);
    if (errorInfo.number === undefined && errorInfo.Email === undefined)
      setEmailCheck('empty');
    else setEmailCheck('');
  };
  const { Text } = Typography;
  return (
    <div className="parent">
      <div className="carouselDiv">
        <Carousel autoplay>
          {images.map((image: string) => {
            return (
              <Image preview={false} height="100vh" width="100%" src={image} />
            );
          })}
        </Carousel>
      </div>
      {type === 'login-home' || type === 'admin-dashboard' ? (
        <LoginHome
          setEmailCheck={setEmailCheck}
          setUserType={setUserType}
          userNameType={userNameType}
          setUserNameType={setUserNameType}
          emailCheck={emailCheck}
          validateEmail={validateEmail}
          forgetPassword={forgetPassword}
          loginButton={loginButton}
          userType={userType}
          setModalVisible={setModalVisible}
          setModalType={setModalType}
          modalType={modalType}
          modalVisible={modalVisible}
          type={type}
        />
      ) : type === 'OTP-verification' ? (
        <div className="cardDiv">
          <Card className="cardStyle">
            <div
              className="otpFormParent"
              style={{ paddingTop: type === 'OTP-verification' ? '15%' : '5%' }}
            >
              <div className="topContent">
                <ArrowLeftOutlined
                  style={{ fontSize: '25px', paddingBottom: 20 }}
                  onClick={() => backButton()}
                />
                <h1 className="mainHeading">Verification-OTP</h1>
                <Text className="subHeading">Please check your email</Text>
              </div>
              <div className="mainContent">
                <Form
                  layout="vertical"
                  validateMessages={validateMessages}
                  // onFinish={onFinish}
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
        <NewPassword
          type={type}
          backButton={backButton}
          loginButton={loginButton}
        />
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
                  style={{ fontSize: '25px', paddingBottom: 20 }}
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
                  // onFinish={onFinish}
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
                      placeholder="Input your Phoen Number"
                    />
                  </Form.Item>
                  <Form.Item
                    name="Password"
                    label="Password"
                    rules={[{ required: true, min: 8 }]}
                  >
                    <Input.Password
                      className="password"
                      placeholder="Input your password"
                    />
                  </Form.Item>
                  <Form.Item
                    name="Confirm Password"
                    label="Confirm Password"
                    rules={[{ required: true, min: 8 }]}
                  >
                    <Input.Password
                      className="password"
                      placeholder="Input your password"
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
                    <Checkbox className="agreement">
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
                  <div className="haveAc">
                    <span>Already have an account?</span>
                    <span className="register" onClick={() => login()}>
                      Login
                    </span>
                  </div>
                  <div>
                    <span className="loginWith">Or Login With</span>
                  </div>
                  <div className="socialLogin">
                    <CustomButton
                      height={'48px'}
                      width={'190px'}
                      onClick={() => loginWithGoogle()}
                      backgroundColor="#F3F3F3"
                      color="#111111"
                      icon={<Google />}
                      border={'1px solid #D9E6FD'}
                      pt="13px"
                    >
                      <span className="socialMeadiaText">Gmail</span>
                    </CustomButton>

                    <CustomButton
                      height={'48px'}
                      width={'190px'}
                      onClick={() => loginWithLinkedin()}
                      backgroundColor="#F3F3F3"
                      color="#111111"
                      border={'1px solid #D9E6FD'}
                      pt="13px"
                      icon={<Linkedin />}
                    >
                      <span className="socialMeadiaText">Linkedin</span>
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
              className="otpFormParent"
              style={{ paddingTop: type === 'forget-password' ? '15%' : '5%' }}
            >
              <div className="topContent">
                <ArrowLeftOutlined
                  style={{ fontSize: '25px', paddingBottom: 20 }}
                  onClick={() => backButton()}
                />
                <h1 className="mainHeading">Forgot Password</h1>
                <p className="newPwDesc">
                  Send us your email or phone number for us to give verification
                  otp
                </p>
              </div>
              <div className="mainContent">
                <Form
                  layout="vertical"
                  validateMessages={validateMessages}
                  // onFinish={onFinish}
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
  forgetPassword: () => alert('forget password'),
  registerUser: () => alert('register'),
  login: () => alert('login'),
  type: 'login-home',
  images: [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/800px-Black_colour.jpg',
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  ],
};
