import React from 'react';
import { Form, Input } from 'antd';
import { FormLabel } from './FormLabel';
import { usePlacesWidget } from 'react-google-autocomplete';
import { LocationIcon } from '../UnojobsIcons/FormIcons';
import { HStack } from './../../primitives';
import { style } from '../Authentication/style.authentication';

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

export const AddressSearchInputAntd = (props: IAddressSearchInputAntdProps) => {
  const { ref: antRef } = usePlacesWidget({
    apiKey: props.locationApiKey,
    onPlaceSelected: async (place: any) => {
      const data = await props.performPlaceDetailsSearch(place);
      props.form.setFieldValue('address', data);
    },
    options: {
      types: ['(cities)'],
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
      <HStack alignItems={'center'}>
        <Input
          //@ts-ignore
          ref={antRef}
          type="text"
          style={style.input}
          placeholder={props.placeholder}
          suffix={<LocationIcon size={5} />}
        />
      </HStack>
    </Form.Item>
  );
};
