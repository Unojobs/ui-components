import React from 'react';
import { Center } from 'src/components/composites';
import { Text } from 'src/components/primitives';

import { PageNotFoundIcon } from '../UnojobsIcons/CommonScreenIcon';

interface PropsTypes {
  title: string;
  subTitle: string;
}
export const PageNotFound = (props: PropsTypes) => {
  const { title, subTitle } = props;
  return (
    <Center height="100%" justifyContent="center" alignItems="center">
      <PageNotFoundIcon />
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

PageNotFound.defaultProps = {
  title: 'Page Not Found!',
  subTitle:
    ' We are really sorry for the inconvenience but the page that you are looking for cannot be found.',
};
