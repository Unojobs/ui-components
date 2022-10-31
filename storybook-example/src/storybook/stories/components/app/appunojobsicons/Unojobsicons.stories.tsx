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
  UnoJobsTechDepartment,
  UnoJobsDataAnalysis,
  UnoJobsDesign,
  UnoJobsOperationsDepartment,
  UnoJobsSalesDepartment,
  UnoJobsMarketingDepartment,
  UnoJobsSupplyChainDepartment,
  UnoJobsFinanceDepartment,
  UnoJobsSecurityDepartment,
  UnoJobsAdministrationDepartment,
  UnoJobsConsultationDepartment,
  UnoJobsEducationDepartment,
  UnoJobsHealthDepartment,
  UnoJobsLawDepartment,
  UnoJobsRetailDepartment,
  UnoJobsProductDepartment,
  UnoJobsHospitalityDepartment,
  UnoJobsWellnessDepartment,
  UnoJobsAviationDepartment,
  UnojobsTickIcon,
} from 'components';

const UnojobsiconsTest = ({ ...args }) => {
  return (
    <Wrapper>
      <Box>
        <Text fontSize="lg" fontWeight="bold">
          All UnoJobs NB Icons
        </Text>
        <VStack mt={4} space={3}>
          <HStack space={3} alignItems="center">
            <Text>Arrows :</Text>
            <UnojobsDownArrowSharpIcon />
            <UnojobsRightArrowCurvedIcon />
            <UnojobsDownArrowCurvedIcon />
          </HStack>
          <HStack space={3} alignItems="center">
            <Text>Cards :</Text>
            <UnojobsCardStackIcon />
            <UnojobsCreditCardFilledIcon />
            <UnojobsVideoCardStackIcon />
          </HStack>
          <HStack space={3} alignItems="center">
            <Text>Users :</Text>
            <UnojobsUserIcon />
            <UnojobsUserBoxIcon />
            <UnojobsUserGroupIcon />
          </HStack>
          <HStack space={3} alignItems="center">
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
          <HStack space={3} alignItems="center" flexWrap="wrap">
            <Text>Landing :</Text>
            <UnojobsUpArrowRoundIcon />
            <UnojobsDownArrowRoundIcon />
            <UnojobsTickIcon></UnojobsTickIcon>
            <UnoJobsTechDepartment></UnoJobsTechDepartment>
            <UnoJobsDataAnalysis></UnoJobsDataAnalysis>
            <UnoJobsDesign></UnoJobsDesign>
            <UnoJobsOperationsDepartment></UnoJobsOperationsDepartment>
            <UnoJobsSalesDepartment></UnoJobsSalesDepartment>
            <UnoJobsMarketingDepartment></UnoJobsMarketingDepartment>
            <UnojobsUserGroupIcon
              fill="#4169E0"
              size={8}
            ></UnojobsUserGroupIcon>
            <UnoJobsSupplyChainDepartment></UnoJobsSupplyChainDepartment>
            <UnoJobsFinanceDepartment></UnoJobsFinanceDepartment>
            <UnoJobsSecurityDepartment></UnoJobsSecurityDepartment>
            <UnoJobsAdministrationDepartment></UnoJobsAdministrationDepartment>
            <UnoJobsConsultationDepartment></UnoJobsConsultationDepartment>
            <UnoJobsEducationDepartment></UnoJobsEducationDepartment>
            <UnoJobsHealthDepartment></UnoJobsHealthDepartment>
            <UnoJobsLawDepartment></UnoJobsLawDepartment>
            <UnoJobsRetailDepartment></UnoJobsRetailDepartment>
            <UnoJobsProductDepartment></UnoJobsProductDepartment>
            <UnoJobsHospitalityDepartment></UnoJobsHospitalityDepartment>
            <UnoJobsWellnessDepartment></UnoJobsWellnessDepartment>
            <UnoJobsAviationDepartment></UnoJobsAviationDepartment>
          </HStack>
          <HStack space={3} alignItems="center">
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
