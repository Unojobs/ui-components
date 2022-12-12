/* eslint-disable no-console */
import { CloseOutlined, MessageOutlined } from '@ant-design/icons';
import React from 'react';
import { CustomNBButton } from '../../../CustomNBButton';
import { VStack, Text, Box, HStack } from '../../../../primitives';
import { CategorySelector } from '../CategorySelector';
import { SearchBar } from '../SearchBar';
import { CustomAvatar } from '../CustomAvatar';

export const CreateNewMessage = (_props: any) => {
  return (
    <VStack padding={2.5} space={1.5}>
      <Box w="full" alignItems="flex-end">
        <CustomNBButton
          padding="0"
          width="fit-content"
          height="fit-content"
          backgroundColor="transparent"
        >
          <CloseOutlined size={24} />
        </CustomNBButton>
      </Box>
      <VStack space={'30px'} padding="30px">
        <Text fontSize="24px" fontWeight={600} color="#111111">
          Choose a Candidate to Send a Message
        </Text>
        <CategorySelector
          defaultValue="All Job Project"
          placeholder="All Job Project"
          height="48px"
          list={[{ label: 'Adeel', value: 'adeel' }]}
          onValueChange={(value) => console.log(value)}
        />
        <SearchBar
          value={''}
          onChangeText={(text: string) => console.log(text)}
          height="48px"
        />
        <VStack space={5}>
          <NewChatCard />
          <NewChatCard />
        </VStack>
      </VStack>
    </VStack>
  );
};

const user = {
  id: 123,
  username: 'Stan Goodly',
  avatarUri: 'https://joeschmoe.io/api/v1/random',
};

function NewChatCard(_props: any) {
  return (
    <HStack
      px="30px"
      py="24px"
      alignItems="center"
      justifyContent="space-between"
      borderRadius="10px"
      borderColor="#E7E7E7"
      borderWidth="1px"
    >
      <HStack alignItems="center" space={5}>
        <CustomAvatar user={user} size="40px" />
        <Text>{user.username}</Text>
      </HStack>
      <HStack alignItems="center" space={5}>
        <Box px="10px" py="5px" backgroundColor="#F2FDDF" borderRadius="10px">
          <Text>Interview</Text>
        </Box>
        <MessageOutlined size={24} />
      </HStack>
    </HStack>
  );
}
