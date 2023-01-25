/**
 * @param onChange {function} - is for getting selected radio button which returns string, "undefined" as default e.g, selected radio button is "Employer", onChange = (value:string)=>console.log(value) // output: "Employer"
 * @param list {string[]}- is for adding radio buttons, [] as default  e.g, list = ["Candidate", "Employer"] as default
 * @param size {'extraLarge' | 'large' | 'medium' | 'small'}- is for managing size of radio button, "medium" as default e.g, size="medium" or size="small"
 * @param label {string}- is for adding label to Radio Button group, "RadioButtonGroup" as default.
 * @param space {number}- is for adding space between the radio buttons, "20.5px" as default. e.g, space="10px"
 * @param initialValue {string}- is for setting up initial selection of radio button e.g, initialValue="Employer"
 */

import type React from 'react';

export type SelectableRadioButtonProps = {
  onChange?: (value: string) => void;
  list: string[];
  size: ISelectableRadioSizeType;
  label?: string;
  space?: number;
  initialValue: string | undefined;
  userStyle?: React.CSSProperties;
  disableList?: boolean[];
};

export declare type ISelectableRadioSizeType =
  | 'mid-large'
  | 'extraLarge'
  | 'large'
  | 'medium'
  | 'small'
  | 'extraSmall';
