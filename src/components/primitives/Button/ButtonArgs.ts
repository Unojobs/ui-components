import { appTheme as theme } from "../../core/AppProvider";

// const {
//   contrastThreshold,
//   white,
//   black,
//   lightText,
//   darkText,
//   // ...remColors
// } = theme.colors;
export const StorybookButtonArgs = {
  colorScheme: {
    name: "colorScheme",
    type: { name: "string", required: true },
    defaultValue: "primary",
    // options: Object.keys(remColors),
    options: ["primary", "secondary", "tertiary"],
    control: {
      type: "select",
    },
  },
  variant: {
    name: "variant",
    type: { name: "string", required: true },
    defaultValue: "solid",
    options: Object.keys(theme.components.Button.variants),
    control: {
      type: "radio",
    },
  },
  children: {
    name: "children",
    type: {
      name: "string",
      required: true,
    },
    defaultValue: "Button",
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
  isPressed: {
    name: "isPressed",
    type: {
      name: "boolean",
    },
    defaultValue: false,

    control: {
      type: "boolean",
    },
  },
  isFocusVisible: {
    name: "isFocusVisible",
    type: {
      name: "boolean",
    },
    defaultValue: false,

    control: {
      type: "boolean",
    },
  },
  size: {
    name: "size",
    type: {
      name: "string",
    },
    defaultValue: "md",
    control: {
      type: "select",
    },
    options: ["sm", "md", "lg"],
  },
  leftIcon: {
    name: "leftIcon",
    type: {},
  },
};
