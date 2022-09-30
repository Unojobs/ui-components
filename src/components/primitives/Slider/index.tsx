import React from 'react';
import { ISlideProps, Slider as NBSlider } from 'native-base';
import type { ISliderThumbProps, ISliderTrackFilledProps, ISliderTrackProps } from 'native-base/lib/typescript/components/primitives/Slider/types';

const SliderTemp: any = ({ children, ...props }: ISlideProps) => {
  return <NBSlider {...props}>{children}</NBSlider>;
};

const SliderTempTrack = ({ children, ...props }: ISliderTrackProps) => {
  return <NBSlider.Track {...props}>{children}</NBSlider.Track>;
};

const SliderTempFilledTrack = ({ children, ...props }: ISliderTrackFilledProps) => {
  return <NBSlider.FilledTrack {...props}>{children}</NBSlider.FilledTrack>;
};

const SliderTempThumb = ({ children, ...props }: ISliderThumbProps) => {
  return <NBSlider.Thumb {...props}>{children}</NBSlider.Thumb>;
};
const Slider: any = SliderTemp;
Slider.Track = SliderTempTrack;
Slider.FilledTrack = SliderTempFilledTrack;
Slider.Thumb = SliderTempThumb;
export default Slider;
