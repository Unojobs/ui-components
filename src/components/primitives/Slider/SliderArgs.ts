import { appTheme as theme } from "../../core/AppProvider";

export const StorybookSliderArgs = {
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
  size: {
    name: "size",
    type: {
      name: "string",
    },
    defaultValue: "md",
    control: {
      type: "select",
    },
    options: Object.keys(theme.components.Slider.sizes),
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
  // isHovered: {
  //   name: "isHovered",
  //   type: {
  //     name: "boolean",
  //   },
  //   defaultValue: false,

  //   control: {
  //     type: "boolean",
  //   },
  // },
};
