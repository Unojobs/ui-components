import { appTheme as theme } from '../../../../../../../src/components/core/AppProvider';

export const StorybookArgs = {
  size: {
    name: 'size',
    type: {
      name: 'string',
    },
    // defaultValue: "sm",
    control: {
      type: 'select',
    },
    options: Object.keys(theme.components.Radio.sizes).reverse(),
  },
  colorScheme: {
    name: 'colorScheme',
    type: { name: 'string', required: true },
    defaultValue: 'primary',
    // options: Object.keys(remColors),
    options: ['primary', 'secondary', 'tertiary'],
    control: {
      type: 'select',
    },
  },
  isHovered: {
    name: 'isHovered',
    type: { name: 'boolean' },
    defaultValue: false,

    control: {
      type: 'boolean',
    },
  },
  isFocusVisible: {
    name: 'isFocusVisible',
    type: { name: 'boolean' },
    defaultValue: false,

    control: {
      type: 'boolean',
    },
  },
  defaultIsChecked: {
    name: 'defaultIsChecked',
    type: { name: 'boolean' },
    defaultValue: false,

    control: {
      type: 'boolean',
    },
  },
  isInvalid: {
    name: 'isInvalid',
    type: { name: 'boolean' },
    defaultValue: false,

    control: {
      type: 'boolean',
    },
  },
  isDisabled: {
    name: 'isDisabled',
    type: {
      name: 'boolean',
    },
    defaultValue: false,

    control: {
      type: 'boolean',
    },
  },
};
