import { FileAddOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import type { UploadChangeParam, UploadFile } from 'antd/lib/upload';
import React from 'react';
import { CustomNBButton } from '../../../CustomNBButton';
import { STATIC_PROPS } from './constants';
import type { CustomFileButtonProps } from './types';

export const CustomFileButton = (props: CustomFileButtonProps) => {
  const { handleFileUpload } = props;
  const handleFile = (event: UploadChangeParam<UploadFile<any>>) => {
    handleFileUpload?.(event);
  };
  return (
    <CustomNBButton {...STATIC_PROPS.CONTAINER_BUTTON}>
      <Upload
        onChange={handleFile}
        // beforeUpload={beforeUpload}
        showUploadList={false}
        style={{ ...STATIC_PROPS.UPLOAD }}
        customRequest={() => {}}
      >
        <FileAddOutlined size={16} rev="" />
      </Upload>
    </CustomNBButton>
  );
};

// const beforeUpload = (file: RcFile) => {
//   const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
//   if (!isJpgOrPng) {
//     alert('You can only upload JPG/PNG file!');
//   }
//   const isLt2M = file.size / 1024 / 1024 < 2;
//   if (!isLt2M) {
//     alert('Image must smaller than 2MB!');
//   }
//   return isJpgOrPng && isLt2M;
// };
