import React from 'react';
import { Form } from 'antd';
import { FormLabel } from './FormLabel';

import { HStack } from './../../primitives';

import Autocomplete from 'react-google-autocomplete';
import './autoComplete.css';
import type { IAddressSearchInputAntdProps } from '../Authentication/UnoAuthModal/types';

export const AddressSearchInputAntd = (props: IAddressSearchInputAntdProps) => {
  // takes name of the city from the location obj coming from google api
  const plainSearch = (data: any) => {
    const _city = data.address_components[0]?.long_name;
    props.form.setFieldValue('address', _city);
  };
  const styleAutoComplete = {
    width: '400px',
    height: '45px',
    border: '1px solid #f3f3f3',
    outline: 'none',
    fontSize: '14px',
    borderRadius: '5px',
    padding: '12px 20px',
  };
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
      validateStatus={props.validateStatus}
      help={props.help}
    >
      <HStack alignItems={'center'}>
        <Autocomplete
          className="autoComplete"
          apiKey={props.locationApiKey}
          onPlaceSelected={plainSearch}
          style={{ ...styleAutoComplete }}
          options={{
            types: ['(cities)'],
            components: ['locality'],
          }}
          placeholder={props.placeholder}
        />
      </HStack>
    </Form.Item>
  );
};
