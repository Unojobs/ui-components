/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Typography } from 'antd';
import { CustomButton } from 'src/components/app/CustomButton';
import { PlusOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;
export interface TitleModalBtnProps {}
export const TitleModalBtn = (props: TitleModalBtnProps) => {
  const {} = props;
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        width: 269,
      }}
    >
      <Title level={4}>Message</Title>
      <CustomButton height="40px" width="81px">
        <Text style={{ fontSize: 12, color: '#fff' }}>
          <PlusOutlined /> New
        </Text>
      </CustomButton>
    </div>
  );
};
