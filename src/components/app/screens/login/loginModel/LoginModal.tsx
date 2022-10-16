import React, { useState } from 'react';
import { Modal, UnojobsLogo, Text, Google, CustomButton, Linkedin } from 'src';
import './loginModalStyle.css';
import OtpInput from 'react-otp-input';
import { Form, Input as AntDInput } from 'antd';
import { FacebookLogo } from 'src/components/app/icons/FacebookLogo';
import { ArrowLeftOutlined } from '@ant-design/icons';
interface IModalProps {
  type: 'register' | 'OTP-verification';
  isOpen: boolean;
  setModalVisible: any;
  setModalType: any;
}
export const LoginModal = (props: IModalProps) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [emailCheck, setEmailCheck] = useState('');
  const { type, isOpen, setModalVisible, setModalType } = props;
  const onFinish = (values: any) => {
    console.log('Success:', values);
    if(values.Email===undefined)
    setEmailCheck('error')
    setModalType('OTP-verification');
  };
  const validateMessages = {
    required: "'${name}' is required!",
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
    if(errorInfo.Email===undefined)
    setEmailCheck('empty')
  };
   const validateEmail = (val: string) => {
    var re = /\S+@\S+\.\S+/;
    console.log(re.test(val), 'rrr');

    if (re.test(val) === false) setEmailCheck('error');
    else setEmailCheck('');
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => setModalVisible(false)}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Body>
            {type === 'register' ? (
              <div className="modalBody">
                <div className="headerParent">
                  <div className="modalTopContent">
                    <div className="unoLogo">
                      <UnojobsLogo />
                    </div>
                    <div className="heading">
                      <Text
                        fontSize="4xl"
                        fontFamily="Urbanist"
                        fontStyle="normal"
                        fontWeight={600}
                        color="#111111"
                      >
                        Join Us
                      </Text>
                    </div>
                  </div>

                  <div className="modalSocialMediaParent">
                    <div className="joinUsing">
                      <Text
                        fontSize="2xl"
                        fontFamily="Urbanist"
                        fontStyle="normal"
                        fontWeight={400}
                        color="#111111"
                      >
                        Join using
                      </Text>
                    </div>
                    <div className="modalIconsDiv">
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
                    </div>
                    <div className="orText">
                      <Text
                        fontSize="2xl"
                        fontFamily="Urbanist"
                        fontStyle="normal"
                        fontWeight={400}
                        color="#111111"
                      >
                        OR
                      </Text>
                    </div>
                  </div>
                </div>
                {/* <Modal.Body> */}
                <div className="modalMainContent">
                  <Form
                    layout="vertical"
                    validateMessages={validateMessages}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Form.Item
                      name="Email"
                      label="Email"
                     
                      required={true}
                      validateStatus={
                        emailCheck === 'error'||emailCheck==='empty' ? 'error' : ''
                      }
                      help={
                        emailCheck === 'error' ? 'Please enter valid email' : "'Email' is required"
                      }
                      rules={[{ required: true , }]}
                    >
                  
                      <AntDInput
                      //  required={true}
                        className="username"
                        onChange={(e) => {
                      

                          validateEmail(e.currentTarget.value);
                        }}
                        placeholder="Input your email"
                      />
                    </Form.Item>
                    <Form.Item
                      name="Password"
                      label="Password"
                      rules={[{ required: true, min: 8 }]}
                    >
                      
                      <AntDInput.Password
                        className="password"
                        placeholder="Input your password"
                      />
                    </Form.Item>
                    <Form.Item>
                      <CustomButton
                        htmlType="submit"
                        width="400px"
                        onClick={() => {
                          // loginButton();
                        }}
                        fontFamily="Urbanist"
                      >
                        Join
                      </CustomButton>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            ) : (
              <div className="modalBody">
                <div className="headerParent">
                  <div className="modalTopContent">
                    <div className="unoLogo">
                      <UnojobsLogo />
                    </div>
                    <div className="heading">
                      <Text
                        fontSize="4xl"
                        fontFamily="Urbanist"
                        fontStyle="normal"
                        fontWeight={600}
                        color="#111111"
                      >
                        Join Us
                      </Text>
                    </div>
                  </div>

                  <div className="verificationTopContent">
                    <ArrowLeftOutlined
                      style={{ fontSize: '25px', paddingBottom: 20 }}
                      onClick={() => setModalType('register')}
                    />
                    <h1 className="otpHeading">Verification-OTP</h1>
                    <Text
                      paddingBottom="50px"
                      fontFamily="Urbanist"
                      fontStyle="normal"
                      fontWeight={500}
                      fontSize="16px"
                      color="#111111"
                    >
                      Please check your email (abc@gmail.com) or your phone
                      number (981072XXXX) and enter your verification otp
                    </Text>
                  </div>
                </div>

                <div className="modalMainContent">
                  <Form
                    layout="vertical"
                    validateMessages={validateMessages}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <div className="modalVerificationOtpLable">
                      Input your OTP code
                    </div>
                    <div className="otpDiv">
                      <Form.Item
                        style={{ display: 'flex', gap: '13px' }}
                        name="OTP"
                        rules={[{ required: true }]}
                      >
                        <OtpInput
                          inputStyle={{
                            width: '90px',
                            height: '45px',
                            border: '1px solid #F3F3F3',
                            borderRadius: '5px',
                          }}
                          onChange={(e: any) => {
                            console.log(e);
                          }}
                          separator={<span style={{ width: 13 }}></span>}
                          numInputs={4}
                          hasErrored={true}
                          errorStyle={{ borderRadius: 'red' }}
                        />
                      </Form.Item>
                    </div>

                    <Form.Item>
                      <CustomButton
                        htmlType="submit"
                        width={'100%'}
                        onClick={() => {
                          // loginButton();
                        }}
                      >
                        Submit
                      </CustomButton>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            )}
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};
LoginModal.defaultProps = {
  type: 'OTP-verification',
};
