import React from 'react';
import { Center } from 'src/components/composites';
import { Text, Box } from 'src/components/primitives';

import { NoDataIcon } from '../UnojobsIcons/CommonScreenIcon';

interface PropsTypes {
  title: string;
  subTitle: string;
}
export const NoDataScreen = (props: PropsTypes) => {
  const { title, subTitle } = props;
  return (
    <Center height="100%" justifyContent="center">
      <Box width={255} height={181}>
        <NoDataIcon size="full" />
      </Box>

      <Text
        fontWeight="semibold"
        fontSize="2xl"
        marginTop={5}
        lineHeight="xl"
        marginBottom={2.5}
      >
        {title}
      </Text>
      <Text fontWeight="normal" fontSize="sm" color="subtitle" lineHeight="lg">
        {subTitle}
      </Text>
    </Center>
  );
};

NoDataScreen.defaultProps = {
  title: 'No Data Found',
  subTitle: 'There is no information to show here',
};
