/* eslint-disable react-native/no-inline-styles */
import { Avatar, Input } from 'antd';
import React from 'react';
import { CustomButton } from 'src/components/app/CustomButton';
import { SendOutlined, GifOutlined, FileAddOutlined } from '@ant-design/icons';
export interface InputMessageProps {
  avatarUri: string;
}
export const InputMessage = (props: InputMessageProps) => {
  const { avatarUri } = props;
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: 817,
        height: 83,
      }}
    >
      <div>
        <Avatar size={45} src={avatarUri} />
      </div>

      <div
        style={{
          paddingRight: 16,
          paddingBottom: 20,
          paddingLeft: 16,
          paddingTop: 20,
          width: 650,
          height: 45,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Input
          placeholder="Write message here..."
          style={{ width: 275, height: 20 }}
          bordered={false}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: 40,
          }}
        >
          <GifOutlined
          // add onClick
          />
          <FileAddOutlined
          // add onClick
          />
        </div>
      </div>
      <CustomButton
        width="48px"
        height="46px"
        backgroundColor="#4169E0"
        borderRadius="5px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <SendOutlined />
      </CustomButton>
    </div>
  );
};
