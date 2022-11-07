import React, { useState } from 'react';
import { UnojobsLogo, Text, CustomButton } from '../../../../../';
import './loginModalStyle.css';
import OtpInput from 'react-otp-input';
import { Form } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

export const VerificationModal = (props: any) => {
  const [OTP, setOTP] = useState('');
  const { setModalType } = props;
  // const onFinish = (values: any) => {
  //   // console.log('Success:', values);
  // };
  const validateMessages = {
    required: "'${name}' is required!",
  };

  return (
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
            Please check your email (abc@gmail.com) or your phone number
            (981072XXXX) and enter your verification otp
          </Text>
        </div>
      </div>

      <div className="modalMainContent">
        <Form
          layout="vertical"
          validateMessages={validateMessages}
          // onFinish={onFinish}
          autoComplete="off"
        >
          <div className="modalVerificationOtpLable">Input your OTP code</div>
          <div className="otpDiv">
            <Form.Item
              style={{ display: 'flex', gap: '13px' }}
              name="OTP"
              rules={[{ required: true }]}
            >
              <OtpInput
                inputStyle={{
                  width: '73px',
                  height: '45px',
                  border: '1px solid #F3F3F3',
                  borderRadius: '5px',
                  required: true,
                }}
                onChange={(e: string) => {
                  setOTP(e);
                }}
                separator={<span style={{ width: 14 }}></span>}
                numInputs={6}
                value={'number'}
              />
            </Form.Item>
          </div>

          <Form.Item>
            <CustomButton
              disable={OTP.length < 6 && true}
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
  );
};
