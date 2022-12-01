import React from 'react';
import { Center } from 'src/components/composites';
import { Text, Box } from 'src/components/primitives';

import { AccessDeniedIcon } from '../UnojobsIcons/CommonScreenIcon';

interface PropsTypes {
  title: string;
  subTitle: string;
}
export const AccessDenied = (props: PropsTypes) => {
  const { title, subTitle } = props;
  return (
    <Center height="100%" justifyContent="center" alignItems="center">
      <Box width={355} height={283}>
        <AccessDeniedIcon size="full" />
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

      <Text
        fontWeight="normal"
        fontSize="sm"
        color="textColors.subtitle"
        lineHeight="lg"
      >
        {subTitle}
      </Text>
    </Center>
  );
};

AccessDenied.defaultProps = {
  title: 'Access Denied !',
  subTitle:
    ' The page you’re trying to reach has restricted access. Please refer to your system admin.',
};
