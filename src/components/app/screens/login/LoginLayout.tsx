import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Card, Carousel, Typography, Form, Input, Image, Checkbox } from 'antd';
import './LoginStyle.css';
import { CustomButton, LoginModal, SelectableRadioButton } from 'src';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { UnojobsLogo, Linkedin, Google, FacebookLogo } from 'src';
import type { LoginProps } from './types';
export const Login = (props: LoginProps) => {
  const {
    heading,
    type,
    backButton,
    subHeading,
    loginButton,
    loginWithGoogle,
    loginWithLinkedin,
    forgetPassword,
    registerUser,
    login,
    images,
  } = props;
  const [userName, setUserName] = useState();
  const [emailCheck, setEmailCheck] = useState('');
  const [userType, setUserType] = useState('Employer');
  const [modalType, setModalType] = useState('register');
  const [modalVisible, setModalVisible] = useState(false);
  const [userNameType, setUserNameType] = useState('');
  const validateMessages = {
    required: "'${name}' is required!",
  };
  const onFinish = (values: any) => {
    console.log('Success:', values);
    
  };
  const validateEmail = (val: string) => {
    var re = /\S+@\S+\.\S+/;
    if (re.test(val) === false) 
    setEmailCheck('error');
    else setEmailCheck('');
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
    if((errorInfo.number===undefined&&errorInfo.Email===undefined))
    setEmailCheck('empty')
    else
    setEmailCheck('')
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
      {type === 'login-home' ? (
        <div className="cardDivLoginHome">
          <Card className="cardStyleCreateAc">
            <div className="formParent">
              <div className="topContent">
                <UnojobsLogo />
                <h1 className="mainHeading">{heading}</h1>
                <Text className="subHeading">{subHeading}</Text>
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
                    name="user type"
                    rules={[{ required: true }]}
                    initialValue="Employer"
                  >
                    <div style={{ paddingBottom: 30, width: '100%' }}>
                      <SelectableRadioButton
                        onChange={(e: string) => {
                          setUserType(e);
                        }}
                        size="medium"
                        space={10}
                        list={['Employer', 'Candidate']}
                        initialValue="Employer"
                      />
                    </div>
                  </Form.Item>

                  <Form.Item
                    name={userNameType === 'number' ? 'number' : 'email'}
                    label="Email/Phone Number"
                    rules={[{ required: true }]}
                    validateStatus={
                      emailCheck === 'error' || emailCheck === 'empty'
                        ? 'error'
                        : ''
                    }
                    help={
                      emailCheck === 'error'
                        ? 'Please enter valid email'
                        : emailCheck === 'empty'
                        ? "'Email' is required"
                        : ''
                    }
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
                          setEmailCheck('')
                        } else {
                          setUserNameType('email');
                          validateEmail(e.currentTarget.value);
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
                    <span
                      className="forgetPassword"
                      onClick={() => forgetPassword()}
                    >
                      Forget Password
                    </span>
                  </div>

                  <Form.Item>
                    <CustomButton
                      htmlType="submit"
                      width={'100%'}
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
                    <span className="loginWith">Or Login With</span>
                  </div>
                  <div className="socialLogin">
                    <CustomButton
                      height={'48px'}
                      width={'46px'}
                      p="0px"
                      pt="10px"
                      border={'1px solid #D9E6FD'}
                      onClick={() => alert('login with Google')}
                      backgroundColor="#F3F3F3"
                      color="#111111"
                      icon={<Google />}
                    />

                    <CustomButton
                      height={'48px'}
                      width={'46px'}
                      p="0px"
                      pt="10px"
                      border={'1px solid #D9E6FD'}
                      onClick={() => alert('login with Linkedin')}
                      backgroundColor="#F3F3F3"
                      color="#111111"
                      icon={<Linkedin />}
                    />
                    {userType === 'Candidate' && (
                      <CustomButton
                        height={'48px'}
                        width={'46px'}
                        p="0px"
                        pt="10px"
                        border={'1px solid #D9E6FD'}
                        onClick={() => alert('login with Facebook')}
                        backgroundColor="#F3F3F3"
                        color="#111111"
                        icon={<FacebookLogo />}
                      ></CustomButton>
                    )}
                  </div>
                  <div className="dontHaveAc">
                    <span>Don't have any account?</span>
                    <span
                      className="register"
                      onClick={() => {
                        setModalVisible(!modalVisible);
                      }}
                    >
                      Register
                    </span>
                  </div>
                  <LoginModal
                    setModalType={setModalType}
                    type={
                      modalType === 'register' ? 'register' : 'OTP-verification'
                    }
                    isOpen={modalVisible}
                    setModalVisible={setModalVisible}
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
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
                  style={{ fontSize: '25px', paddingBottom: 20 }}
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
                      placeholder="Input your new password account"
                    />
                  </Form.Item>{' '}
                  <Form.Item
                    name="Confirm New Password"
                    label="Confirm New Password"
                    rules={[{ required: true, min: 8 }]}
                  >
                    <Input.Password
                      className="password"
                      placeholder="Input your new password account"
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
                    name="Password"
                    label="Password"
                    rules={[{ required: true, min: 8 }]}
                  >
                    <Input.Password
                      className="password"
                      placeholder="Input your password"
                    />
                  </Form.Item>{' '}
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
                      {' '}
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
