import { appTheme as theme } from "../../core/AppProvider";

// const {
//   contrastThreshold,
//   white,
//   black,
//   lightText,
//   darkText,
//   // ...remColors
// } = theme.colors;
export const StorybookInputArgs = {
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
    defaultValue: "Enter Text",
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
  // isLoading: {
  //   name: "isLoading",
  //   type: {
  //     name: "boolean",
  //   },
  //   defaultValue: false,

  //   control: {
  //     type: "boolean",
  //   },
  // },

  size: {
    name: "size",
    type: {
      name: "string",
    },
    defaultValue: "md",
    control: {
      type: "select",
    },
    options: Object.keys(theme.components.Input.sizes),
  },
};
