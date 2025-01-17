import { InfoCircleOutlined } from '@ant-design/icons';

import { Tooltip } from 'antd';
import React from 'react';
import { VStack, Text } from '../../primitives';

interface ILabelProps {
  label?: string;
  subLabel?: string;
  requiredMark?: boolean;
  isOrgForm?: boolean;
  isOptional?: boolean;
  tooltip?: string;
}

export const FormLabel: React.FC<ILabelProps> = (props) => {
  const labelStyle = {
    lineHeight: '140%',
    color: '#111111',
  };
  const subLabelStyle = {
    width: 300,
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '140%',
    letteSpacing: '0.01em',
    color: '#707070',
  };
  return (
    <VStack width={341}>
      <Text {...labelStyle} fontSize={props.isOrgForm ? 14 : 18}>
        {props.label}
        {props.requiredMark && <Text color="red.500"> *</Text>}

        {props.tooltip && (
          <Tooltip placement="top" title={props.tooltip}>
            <InfoCircleOutlined
              style={{ marginLeft: '8px', cursor: 'pointer' }}
            />
          </Tooltip>
        )}
        {props.isOptional && (
          <Text color="gray.500" ml={1}>
            {' '}
            (optional)
          </Text>
        )}
      </Text>
      {props.subLabel && <Text {...subLabelStyle}>{props.subLabel}</Text>}
    </VStack>
  );
};
