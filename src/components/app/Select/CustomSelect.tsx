import { Select } from 'antd';
import { CheckCircleIcon } from '../../primitives';
import React from 'react';
import './selectStyle.css';
const { Option } = Select;
export const CustomSelect: React.FC<{
  selected?: any;
  onChange?: any;
  options: any;
  multiple?: 'tags' | 'multiple';
  disable?: boolean;
}> = (props) => {
  const { selected, onChange, options, multiple, disable } = props;

  const handleSelectValue = (options: any, value: any) => {
    if (!multiple) {
      let value = { id: options.key, name: options.value };
      onChange(value);
    } else {
      let selectedvalues = options?.map((option: any, index: number) => {
        if (option?.key) {
          return { id: option.key, name: option.value };
        } else {
          return { id: -1, name: value[index] };
        }
      });
      onChange(selectedvalues);
    }
  };

  return (
    <div className="adminSelect">
      <Select
        mode={!multiple ? undefined : multiple}
        value={
          !multiple ? selected?.name : selected?.map((value: any) => value.name)
        }
        listHeight={250}
        showSearch
        placeholder="Select"
        optionFilterProp="children"
        filterOption={(input, option) =>
          (option!.children as unknown as string)
            .toLowerCase()
            .includes(input.toLowerCase())
        }
        menuItemSelectedIcon={<CheckCircleIcon style={{ color: '#1974FC' }} />}
        onChange={(value, options) => handleSelectValue(options, value)}
        disabled={disable}
      >
        {options?.map((option: any) => {
          return (
            <Option key={option.id} value={option.label} style={styles.option}>
              {option.label}
            </Option>
          );
        })}
      </Select>
    </div>
  );
};

const styles = {
  option: {
    padding: '26px',
    borderBottom: `1px solid #F3F3F3`,
  },
};
