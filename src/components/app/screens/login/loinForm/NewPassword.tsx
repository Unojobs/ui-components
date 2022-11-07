import React from 'react';
import 'antd/dist/antd.css';
import { Card, Form, Input } from 'antd';
import './LoginStyle.css';
import { CustomButton } from '../../../../../';
import { ArrowLeftOutlined } from '@ant-design/icons';
export const NewPassword = (props: any) => {
  const { backButton, loginButton, type } = props;
  const validateMessages = {
    required: "'${name}' is required!",
  };
  //es-lint @typescript-eslint/no-unused-vars
  const onFinish = () => {
    // console.log('Success:', values);
  };
  const onFinishFailed = () => {
    // console.log('Failed:', errorInfo);
  };

  return (
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
              The password must consist of 8 characters with a combination of
              letters and number.
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
  );
};
