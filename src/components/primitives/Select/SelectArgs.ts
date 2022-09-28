import { appTheme as theme } from "../../core/AppProvider";

export const StorybookSelectArgs = {
  color: {
    name: "color",
    type: { name: "string", required: true },
    defaultValue: "primary.500",
    // options: Object.keys(remColors),
    options: ["primary.500", "secondary.500", "tertiary.500"],
    control: {
      type: "select",
    },
  },
  placeholderTextColor: {
    name: "placeholderTextColor",
    type: { name: "string", required: true },
    defaultValue: "coolGray.600",
    // options: Object.keys(remColors),
    control: {
      type: "text",
    },
  },
  variant: {
    name: "variant",
    type: { name: "string", required: true },
    defaultValue: "rounded",
    options: Object.keys(theme.components.Input.variants),
    control: {
      type: "radio",
    },
  },
  placeholder: {
    name: "placeholder",
    type: {
      name: "string",
      required: true,
    },
    defaultValue: "Choose a profession",
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
  isFocused: {
    name: "isFocused",
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
