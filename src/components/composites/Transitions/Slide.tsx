import React from 'react';
import { ISlideProps, Slide as NBSlide } from 'native-base';
export const Slide = React.memo(({ ...props }: ISlideProps) => {
  return <NBSlide {...props} />;
});
