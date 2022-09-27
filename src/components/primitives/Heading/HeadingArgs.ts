import { myTheme as theme } from "../../../theme";

export const StorybookHeadingArgs = {
  children: {
    name: "children",
    type: {
      name: "string",
      required: true,
    },
    defaultValue: "This is a Heading",
    control: {
      type: "text",
    },
  },
  size: {
    name: "size",
    type: {
      name: "string",
    },
    defaultValue: "lg",
    control: {
      type: "select",
    },
    options: Object.keys(theme.components.Heading.sizes),
  },
};
