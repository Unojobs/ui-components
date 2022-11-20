import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './style.css';
import { Radio, Space } from 'antd';
import type { RadioChangeEvent } from 'antd';
import type {
  ISelectableRadioSizeType,
  SelectableRadioButtonProps,
} from './types';

export const SelectableRadioButton = (
  props: SelectableRadioButtonProps
): JSX.Element => {
  const { list, onChange, size, initialValue, space } = props;
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    initialValue
  );

  const handleButtonSelection = (event: RadioChangeEvent) => {
    setSelectedValue(event.target.value);
    if (onChange) onChange(event.target.value);
  };

  const createButtons = () => {
    const radioButtons =
      list?.length &&
      list?.map((value: string, index: number) => {
        return (
          <div className="radio-button-conatiner" key={index}>
            <Radio.Button
              autoFocus={false}
              className={`button-common ${
                value === selectedValue
                  ? 'button-selected'
                  : 'button-un-selected'
              } button-${size}`}
              value={value}
            >
              {value}
            </Radio.Button>
            <div
              className={`radio-common ${
                value === selectedValue ? 'radio-checked' : 'radio-un-checked'
              }`}
            />
          </div>
        );
      });

    return radioButtons;
  };

  return (
    <Radio.Group onChange={handleButtonSelection} value={selectedValue}>
      <Space
        size={space}
        direction={size === 'extraLarge' ? 'vertical' : 'horizontal'}
        style={props.userStyle}
      >
        {createButtons()}
      </Space>
    </Radio.Group>
  );
};

SelectableRadioButton.defaultProps = {
  list: [],
  onChange: undefined,
  size: 'medium' as ISelectableRadioSizeType,
  initialValue: undefined,
  space: 20.5,
  label: 'RadioButtonGroup',
  userStyle: undefined,
};
