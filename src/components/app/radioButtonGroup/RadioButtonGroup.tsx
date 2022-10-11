import React, { useState } from 'react';
import { Radio, HStack, VStack } from 'native-base';
import type { RadioButtonGroupProps } from './types';
import './style.css';

export const RadioButtonGroup = (props: RadioButtonGroupProps): JSX.Element => {
  const { list, onChange, size, space, initialValue } = props;
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    initialValue
  );

  const handleButtonSelection = (value: string) => {
    setSelectedValue(value);
    if (onChange) onChange(value);
  };

  const createButtons = () => {
    const radioButtons =
      list?.length &&
      list?.map((value: string, index: number) => {
        return (
          <div key={`${value}_${index}`}>
            <label
              className={`button-common ${
                value === selectedValue
                  ? 'button-selected'
                  : 'button-un-selected'
              } button-${size ? size : 'medium'}`}
            >
              {value}
              <Radio value={value} marginLeft="30px" />
            </label>
          </div>
        );
      });

    return radioButtons;
  };

  return (
    <Radio.Group
      name="radioButtonGroup"
      onChange={handleButtonSelection}
      value={selectedValue}
    >
      {size === 'extraLarge' ? (
        <VStack space={space}>{createButtons()}</VStack>
      ) : (
        <HStack space={space}>{createButtons()}</HStack>
      )}
    </Radio.Group>
  );
};

RadioButtonGroup.DefaultProps = {
  list: [],
  onChange: undefined,
  size: 'medium',
  label: 'RadioButtonGroup',
  sapce: '20.5px',
  initialValue: undefined,
};
