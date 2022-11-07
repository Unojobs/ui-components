import React, { useState } from 'react';
import {
  Modal,
  UnojobsLogo,
  Text,
  Google,
  CustomButton,
  Linkedin,
} from '../../../../../';
import './loginModalStyle.css';
import { Form, Input as AntDInput } from 'antd';
import { FacebookLogo } from '../../../../../';
import { VerificationModal } from './VerificationModal';
interface IModalProps {
  type?: 'register' | 'OTP-verification';
  isOpen?: boolean;
  setModalVisible?: any;
  setModalType?: any;
}
export const LoginModal = (props: IModalProps) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [emailCheck, setEmailCheck] = useState('');
  const { type, isOpen, setModalVisible, setModalType } = props;
  const onFinish = (values: any) => {
    // console.log('Success:', values);
    if (values.Email === undefined) setEmailCheck('error');
    setModalType('OTP-verification');
  };
  const validateMessages = {
    required: "'${name}' is required!",
  };
  const onFinishFailed = (errorInfo: any) => {
    // console.log('Failed:', errorInfo);
    if (errorInfo.Email === undefined) setEmailCheck('empty');
  };
  const validateEmail = (val: string) => {
    var re = /\S+@\S+\.\S+/;
    // console.log(re.test(val), 'rrr');

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
        <Modal.Content
          minW={type !== 'register' ? '600px' : '500px'}
          padding="40px"
        >
          <Modal.CloseButton />
          <Modal.Body padding="0px">
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
                      />
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
                <div className="modalMainContent">
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
                      <AntDInput
                        type="text"
                        className="modalInput"
                        placeholder="Input your company name"
                      />
                    </Form.Item>
                    <Form.Item
                      name="First Name"
                      label="First Name"
                      rules={[{ required: true }]}
                    >
                      <AntDInput
                        type="text"
                        className="modalInput"
                        placeholder="Input your first name"
                      />
                    </Form.Item>
                    <Form.Item
                      name="Last Name"
                      label="Last Name"
                      rules={[{ required: true }]}
                    >
                      <AntDInput
                        type="text"
                        className="modalInput"
                        placeholder="Input your last name"
                      />
                    </Form.Item>

                    <Form.Item
                      name="Email"
                      label="Email"
                      required={true}
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
                      rules={[{ required: true }]}
                    >
                      <AntDInput
                        className="modalInput"
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
                        className="modalInput"
                        placeholder="Input your password"
                      />
                    </Form.Item>
                    <Form.Item
                      name="Confirm Password"
                      label="Confirm Password"
                      rules={[{ required: true, min: 8 }]}
                    >
                      <AntDInput.Password
                        className="modalInput"
                        placeholder="Input your password"
                      />
                    </Form.Item>
                    <Form.Item>
                      <CustomButton
                        htmlType="submit"
                        width="100%"
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
              <VerificationModal
                setEmailCheck={setEmailCheck}
                setModalType={setModalType}
              />
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
