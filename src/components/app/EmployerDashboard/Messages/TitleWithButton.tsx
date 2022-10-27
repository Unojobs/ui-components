/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { HStack, Text, Heading } from 'src/components/primitives';
import { CustomButton } from '../../CustomButton';
import { PlusOutlined } from '@ant-design/icons';
export interface TitleWithBtnProps {
  titleText: string;
  btnText: string;
}
export const TitleWithBtn = (props: TitleWithBtnProps) => {
  const { titleText, btnText } = props;
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // handle modal pop up here
    // eslint-disable-next-line no-console
    console.log(event);
  };
  return (
    <HStack
      width={'326px'}
      height={'40px'}
      alignItems={'baseline'}
      justifyContent={'space-between'}
    >
      <Heading size={'lg'}>{titleText}</Heading>
      <CustomButton
        onClick={handleClick}
        width="81px"
        height="40px"
        backgroundColor="#4169E0"
      >
        <HStack
          alignItems={'center'}
          justifyContent={'center'}
          width={'81px'}
          height={'40px'}
          space={2}
        >
          <PlusOutlined size={12} />
          <Text style={{ color: '#fff', fontSize: 12 }}>{btnText}</Text>
        </HStack>
      </CustomButton>
    </HStack>
  );
};
