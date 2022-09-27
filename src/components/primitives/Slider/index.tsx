import React from "react";
import { Slider as NBSlider } from "native-base";

const SliderTemp: any = ({ children, ...props }: any) => {
  return <NBSlider {...props}>{children}</NBSlider>;
};

const SliderTempTrack = ({ children, ...props }: any) => {
  return <NBSlider.Track {...props}>{children}</NBSlider.Track>;
};

const SliderTempFilledTrack = ({ children, ...props }: any) => {
  return <NBSlider.FilledTrack {...props}>{children}</NBSlider.FilledTrack>;
};

const SliderTempThumb = ({ children, ...props }: any) => {
  return <NBSlider.Thumb {...props}>{children}</NBSlider.Thumb>;
};
const Slider: any = SliderTemp;
Slider.Track = SliderTempTrack;
Slider.FilledTrack = SliderTempFilledTrack;
Slider.Thumb = SliderTempThumb;
export default Slider;
