import { Wrapper } from '../../Wrapper';
import React from 'react';
import {
  HStack,
  Text,
  VStack,
  UnojobsCardStackIcon,
  UnojobsCreditCardFilledIcon,
  UnojobsDownArrowCurvedIcon,
  UnojobsDownArrowSharpIcon,
  UnojobsRightArrowCurvedIcon,
  UnojobsUserBoxIcon,
  UnojobsUserGroupIcon,
  UnojobsUserIcon,
  UnojobsVideoCardStackIcon,
  UnojobsEditIcon,
  UnojobsDeleteIcon,
  UnojobsViewIcon,
  UnojobsConfirmIcon,
  UnojobsRejectIcon,
  UnojobsNumberIcon,
  UnojobsUpArrowRoundIcon,
  UnojobsDownArrowRoundIcon,
  UnojobsSettingsIcon,
  UnojobsAppLogo,
  UnojobsWindowFilledIcon,
  Box,
} from 'components';

const UnojobsiconsTest = ({ ...args }) => {
  return (
    <Wrapper>
      <Box>
        <Text fontSize="lg" fontWeight="bold">
          All UnoJobs NB Icons
        </Text>
        <VStack mt={4} space={3}>
          <HStack space={3}>
            <Text>Arrows :</Text>
            <UnojobsDownArrowSharpIcon />
            <UnojobsRightArrowCurvedIcon />
            <UnojobsDownArrowCurvedIcon />
          </HStack>
          <HStack space={3}>
            <Text>Cards :</Text>
            <UnojobsCardStackIcon />
            <UnojobsCreditCardFilledIcon />
            <UnojobsVideoCardStackIcon />
          </HStack>
          <HStack space={3}>
            <Text>Users :</Text>
            <UnojobsUserIcon />
            <UnojobsUserBoxIcon />
            <UnojobsUserGroupIcon />
          </HStack>
          <HStack space={3}>
            <Text>Dashboard :</Text>

            <UnojobsEditIcon />
            <UnojobsDeleteIcon />
            <UnojobsViewIcon />
            <UnojobsConfirmIcon />
            <UnojobsRejectIcon />
            <UnojobsNumberIcon bgColor="#4169E0" color="#fff" fade={false}>
              10
            </UnojobsNumberIcon>
            <UnojobsSettingsIcon />
            <UnojobsWindowFilledIcon />
          </HStack>
          <HStack space={3}>
            <Text>Landing :</Text>

            <UnojobsUpArrowRoundIcon />
            <UnojobsDownArrowRoundIcon />
          </HStack>
          <HStack space={3}>
            <Text>AppLogo :</Text>
            <UnojobsAppLogo />
            <UnojobsAppLogo fill="#111" />
          </HStack>
        </VStack>
      </Box>
    </Wrapper>
  );
};

export const UnojobsiconsComponent = UnojobsiconsTest.bind({});

export default {
  title: 'app-unojobsicons/All Icons',
  component: UnojobsiconsComponent,
  argTypes: {},
};
