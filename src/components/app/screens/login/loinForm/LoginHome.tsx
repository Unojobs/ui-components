import React from 'react';
import 'antd/dist/antd.css';
import { Card, Form, Input, Typography } from 'antd';
import './LoginStyle.css';
import { CustomButton, LoginModal, SelectableRadioButton } from 'src';
import { UnojobsLogo, Linkedin, Google, FacebookLogo } from 'src';
export const LoginHome = (props: any) => {
  const {
    setEmailCheck,
    userNameType,
    setUserNameType,
    emailCheck,
    setUserType,
    forgetPassword,
    loginButton,
    userType,
    setModalVisible,
    setModalType,
    modalType,
    modalVisible,
  } = props;
  const validateMessages = {
    required: "'${name}' is required!",
  };
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  const validateEmail = (val: string) => {
    var re = /\S+@\S+\.\S+/;
    if (re.test(val) === false) setEmailCheck('error');
    else setEmailCheck('');
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
    if (errorInfo.number === undefined && errorInfo.Email === undefined)
      setEmailCheck('empty');
    else setEmailCheck('');
  };
  const { Text } = Typography;
  return (
    <div className="cardDivLoginHome">
      <Card className="cardStyleCreateAc">
        <div className="formParent">
          <div className="topContent">
            <UnojobsLogo />
            <h1 className="mainHeading">Welcome to Unojob</h1>
            <Text className="subHeading">
              Please first select you as what here?
            </Text>
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

                    if (isInnt) {
                      setUserNameType('number');
                      setEmailCheck('');
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
  );
};
