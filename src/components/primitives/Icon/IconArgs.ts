import { myTheme as theme } from "../../../theme";

export const StorybookIconArgs = {
  size: {
    name: "size",
    type: {
      name: "string",
    },
    defaultValue: "md",
    control: {
      type: "select",
    },
    options: Object.keys(theme.components.Icon.sizes),
  },
  as: {
    name: "as",
    type: {
      name: "string",
    },
    defaultValue: "AntDesign",
    control: {
      type: "select",
    },
    options: [
      "AntDesign",
      "Entypo",
      "EvilIcons",
      "Feather",
      "FontAwesome",
      "FontAwesome5",
      "Fontisto",
      "Foundation",
      "Ionicons",
      "MaterialCommunityIcons",
      "MaterialIcons",
      "Octicons",
      "SimpleLineIcons",
      "Zocial",
    ],
  },
  name: {
    name: "name",
    type: {
      name: "string",
      required: true,
    },
    defaultValue: "customerservice",
    control: {
      type: "text",
    },
  },
};

export const IconArgs = {
  pages: {
    type: "variant",
    section: "sizes",
    row: "colorScheme",
    component: "states",
  },
  props: {
    sizes: {
      name: "size",
      type: {
        name: "string",
      },
      defaultValue: "md",
      control: {
        type: "select",
      },
      options: Object.keys(theme.components.Icon.sizes).reverse(),
    },
    states: [
      {
        default: {
          name: "default",
        },
      },
    ],
  },
  metaData: {
    heading: "Icon",
    "sub-heading": "The Icon component.",
  },
};
