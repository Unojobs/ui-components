export const StorybookTextAreaArgs = {
  placeholder: {
    name: "placeholder",
    type: {
      name: "string",
      required: true,
    },
    defaultValue: "Enter Text",
    control: {
      type: "text",
    },
  },
  numberOfLines: {
    name: "numberOfLines",
    type: {
      name: "number",
      required: true,
    },
    defaultValue: 2,
    control: {
      type: "number",
    },
  },
  placeholderTextColor: {
    name: "placeholderTextColor",
    type: { name: "string", required: true },
    defaultValue: "coolGray.500",
    control: {
      type: "text",
    },
  },
  isHovered: {
    name: "isHovered",
    type: { name: "boolean" },
    defaultValue: false,

    control: {
      type: "boolean",
    },
  },
  isInvalid: {
    name: "isInvalid",
    type: { name: "boolean" },
    defaultValue: false,

    control: {
      type: "boolean",
    },
  },
  isDisabled: {
    name: "isDisabled",
    type: {
      name: "boolean",
    },
    defaultValue: false,

    control: {
      type: "boolean",
    },
  },
};
