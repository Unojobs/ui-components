export const StorybookArgs = {
  isExternal: {
    name: 'isExternal',
    type: { name: 'boolean' },
    defaultValue: false,

    control: {
      type: 'boolean',
    },
  },
  isUnderlined: {
    name: 'isUnderlined',
    type: { name: 'boolean' },
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
  href: {
    name: 'href',
    type: {
      name: 'string',
    },
    defaultValue: 'https://nativebase.io',
    control: {
      type: 'text',
    },
  },
  children: {
    name: 'children',
    type: {
      name: 'string',
      required: true,
    },
    defaultValue: 'This is a link',
    control: {
      type: 'text',
    },
  },
};
