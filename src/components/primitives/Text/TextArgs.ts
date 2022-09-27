import { myTheme as theme } from "../../../theme";

export const StorybookTextArgs = {
  children: {
    name: "children",
    type: {
      name: "string",
      required: true,
    },
    defaultValue: "This is a Text",
    control: {
      type: "text",
    },
  },
  fontSize: {
    name: "fontSize",
    type: {
      name: "string",
    },
    defaultValue: "md",
    control: {
      type: "select",
    },
    options: Object.keys(theme.fontSizes),
  },
  italic: {
    name: "italic",
    type: {
      name: "boolean",
    },
    defaultValue: false,

    control: {
      type: "boolean",
    },
  },
  bold: {
    name: "bold",
    type: {
      name: "boolean",
    },
    defaultValue: false,

    control: {
      type: "boolean",
    },
  },
  underline: {
    name: "underline",
    type: {
      name: "boolean",
    },
    defaultValue: false,

    control: {
      type: "boolean",
    },
  },
  highlight: {
    name: "highlight",
    type: {
      name: "boolean",
    },
    defaultValue: false,

    control: {
      type: "boolean",
    },
  },
  sub: {
    name: "sub",
    type: {
      name: "boolean",
    },
    defaultValue: false,

    control: {
      type: "boolean",
    },
  },
  strikeThrough: {
    name: "strikeThrough",
    type: {
      name: "boolean",
    },
    defaultValue: false,

    control: {
      type: "boolean",
    },
  },
  isTruncated: {
    name: "isTruncated",
    type: {
      name: "boolean",
    },
    defaultValue: false,

    control: {
      type: "boolean",
    },
  },
};

export const TextArgs = {
  pages: {
    type: "",
    section: "component",
    row: "fontSize",
    component: "states",
  },
  props: {
    children: {
      name: "children",
      type: {
        name: "string",
        required: true,
      },
      defaultValue: "This is a Text",
      control: {
        type: "text",
      },
    },
    fontSize: {
      name: "fontSize",
      type: {
        name: "string",
      },
      defaultValue: "md",
      control: {
        type: "select",
      },
      options: Object.keys(theme.fontSizes),
    },
    states: [
      {
        default: {
          name: "default",
        },
      },
      {
        italic: {
          name: "italic",
          type: {
            name: "boolean",
          },
          defaultValue: false,

          control: {
            type: "boolean",
          },
        },
      },
      {
        bold: {
          name: "bold",
          type: {
            name: "boolean",
          },
          defaultValue: false,

          control: {
            type: "boolean",
          },
        },
      },
      {
        underline: {
          name: "underline",
          type: {
            name: "boolean",
          },
          defaultValue: false,

          control: {
            type: "boolean",
          },
        },
      },
      {
        highlight: {
          name: "highlight",
          type: {
            name: "boolean",
          },
          defaultValue: false,

          control: {
            type: "boolean",
          },
        },
      },
      {
        sub: {
          name: "sub",
          type: {
            name: "boolean",
          },
          defaultValue: false,

          control: {
            type: "boolean",
          },
        },
      },
      {
        strikeThrough: {
          name: "strikeThrough",
          type: {
            name: "boolean",
          },
          defaultValue: false,

          control: {
            type: "boolean",
          },
        },
      },
      {
        isTruncated: {
          name: "isTruncated",
          type: {
            name: "boolean",
          },
          defaultValue: false,

          control: {
            type: "boolean",
          },
        },
      },
    ],
  },
  metaData: {
    heading: "Typography",
    "sub-heading": "Text",
  },
};
