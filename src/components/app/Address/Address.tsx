import React from 'react';
import { Form } from 'antd';
import { FormLabel } from './FormLabel';
import { usePlacesWidget } from 'react-google-autocomplete';
import { LocationIcon } from '../UnojobsIcons/FormIcons';
import { HStack } from './../../primitives';

interface IAddressSearchInputAntdProps {
  name?: string;
  label?: string;
  placeholder?: string;
  requiredMark?: boolean;
  rules?: any[];
  subLabel?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  noDivider?: boolean;
  noLabel?: boolean;
  setLocationDetails?: React.Dispatch<React.SetStateAction<any | null>>;
  initialAddress?: string;
  validateStatus?: '' | 'success' | 'warning' | 'error' | 'validating';
  help?: string;
  onChange?: any;
  isOrgForm?: boolean;
  form?: any;
  isUserAddress?: boolean;
  updateFormField?: string;
  performPlaceDetailsSearch?: any;
  locationApiKey?: any;
  setTextareaRow?: any;
  textareaRow?: any;
}

const fontSize_ele = 14;
const paddingRight_ele = 35;
const width_ele = 400;

export const AddressSearchInputAntd = (props: IAddressSearchInputAntdProps) => {
  const { ref: antRef } = usePlacesWidget({
    apiKey: props.locationApiKey,
    onPlaceSelected: async (place: any) => {
      const data = await props.performPlaceDetailsSearch(place);
      props.form.setFieldsValue('address', data);
    },
    options: {
      types: ['geocode', 'establishment'],
      componentRestrictions: { country: 'in' },
    },
  });

  return (
    <Form.Item
      name={props.name}
      label={
        props.noLabel ? undefined : (
          <FormLabel
            label={props.label}
            subLabel={props.subLabel}
            requiredMark={props.requiredMark}
            isOrgForm={props.isOrgForm}
          />
        )
      }
      rules={props.rules}
      initialValue={props.initialAddress}
      validateStatus={props.validateStatus}
      help={props.help}
    >
      <span className={`ant-text_area_input set-placeholder`}>
        <HStack alignItems={'center'}>
          <textarea
            className="ant-input"
            //@ts-ignore
            ref={antRef}
            style={{
              width: width_ele,
              borderRadius: '5px',
              fontSize: fontSize_ele,
              letterSpacing: '0.03em',
              paddingRight: paddingRight_ele,
              paddingTop: 10,
              paddingBottom: 6,
              minHeight: '45px',
              resize: 'none',
              ...props.style,
            }}
            placeholder={props.placeholder}
            disabled={props.disabled}
            onChange={(e) => {
              if (!e.target.value) props.setTextareaRow(1);
              if (props.onChange) props.onChange();
            }}
            defaultValue={props.initialAddress}
            rows={props.textareaRow}
          />
          <span className="location-icon">
            <LocationIcon size={5} />
          </span>
        </HStack>
      </span>
    </Form.Item>
  );
};
