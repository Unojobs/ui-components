import { appTheme as theme } from '../../../../../../../src/components/core/AppProvider';

export const StorybookArgs = {
  isChecked: {
    name: 'isChecked',
    type: {
      name: 'boolean',
    },
    defaultValue: false,

    control: {
      type: 'boolean',
    },
  },
  size: {
    name: 'size',
    type: {
      name: 'string',
    },
    defaultValue: 'md',
    control: {
      type: 'select',
    },
    options: Object.keys(theme.components.Switch.sizes),
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

  defaultIsChecked: {
    name: 'defaultIsChecked',
    type: {
      name: 'boolean',
    },
    defaultValue: false,

    control: {
      type: 'boolean',
    },
  },
  isInvalid: {
    name: 'isInvalid',
    type: {
      name: 'boolean',
    },
    defaultValue: false,

    control: {
      type: 'boolean',
    },
  },
  // onTrackColor: {
  //   name: "onTrackColor",
  //   type: {
  //     name: "string",
  //   },
  //   // defaultValue: "primary.500",
  //   control: {
  //     type: "text",
  //   },
  // },
  // offTrackColor: {
  //   name: "offTrackColor",
  //   type: {
  //     name: "string",
  //   },
  //   // defaultValue: "primary.500",
  //   control: {
  //     type: "text",
  //   },
  // },
  // onThumbColor: {
  //   name: "onThumbColor",
  //   type: {
  //     name: "string",
  //   },
  //   // defaultValue: "primary.500",
  //   control: {
  //     type: "text",
  //   },
  // },
  // offThumbColor: {
  //   name: "offThumbColor",
  //   type: {
  //     name: "string",
  //   },
  //   // defaultValue: "primary.500",
  //   control: {
  //     type: "text",
  //   },
  // },
};
