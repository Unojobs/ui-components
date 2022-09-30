import React from 'react';
import { ISlideProps, Slide as NBSlide } from 'native-base';
export const Slide = ({ ...props }: ISlideProps) => {
  return <NBSlide {...props}></NBSlide>;
};
