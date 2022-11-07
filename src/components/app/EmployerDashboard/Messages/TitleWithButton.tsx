/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { HStack, Text, Heading } from '../../../primitives';
import { PlusOutlined } from '@ant-design/icons';
import { CustomNBButton } from '../../CustomNBButton';
export interface TitleWithBtnProps {
  titleText: string;
  btnText: string;
  handleClick: (event?: any) => void;
}
export const TitleWithBtn = (props: TitleWithBtnProps) => {
  const { titleText, btnText, handleClick } = props;
  return (
    <HStack
      width={326}
      height={40}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <Text>
        <Heading size={'2xl'} fontWeight={'semibold'}>
          {titleText}
        </Heading>
      </Text>
      <CustomNBButton onClick={handleClick} width={'81px'} height={'40px'}>
        <HStack
          alignItems={'center'}
          justifyContent={'center'}
          width={'full'}
          height={'full'}
          space={1}
        >
          <PlusOutlined size={2} style={{ color: '#fff' }} />
          <Text color={'white'} fontSize={'xs'}>
            {btnText}
          </Text>
        </HStack>
      </CustomNBButton>
    </HStack>
  );
};
