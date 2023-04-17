import React, { useEffect, useState } from 'react';
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
  const { list, onChange, size, initialValue, space, disableList } = props;
  const [selectedValue, setSelectedValue] = useState<string | undefined>('');

  useEffect(() => {
    setSelectedValue(initialValue);
  }, [initialValue]);

  const handleButtonSelection = (value: string) => {
    setSelectedValue(value);
    if (onChange) onChange(value);
  };

  const createButtons = () => {
    const radioButtons =
      list?.length &&
      list?.map((value: string, index: number) => {
        return (
          <div
            className="radio-button-conatiner"
            key={index}
            onClick={(event: React.MouseEvent<HTMLDivElement>) => {
              event.stopPropagation();
              event.preventDefault();
              handleButtonSelection(value);
            }}
          >
            <Radio.Button
              autoFocus={false}
              className={`button-common ${
                value === selectedValue
                  ? 'button-selected'
                  : 'button-un-selected'
              } button-${size}`}
              value={value}
              disabled={disableList?.[index]}
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
    <Radio.Group
      onChange={(event: RadioChangeEvent) => {
        event.preventDefault();
        handleButtonSelection(event.target.value);
      }}
      value={selectedValue}
    >
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
