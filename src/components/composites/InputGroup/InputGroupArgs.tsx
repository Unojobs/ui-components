// export const StorybookInputGroupArgs = {};

export const StorybookInputGroupArgs = {
  backgroundColor: {
    name: "backgroundColor",
    type: { name: "string", required: true },
    defaultValue: "primary",
    options: ["primary.500", "blue.500"],
    control: {
      type: "select",
    },
  },
  iconBackground: {
    name: "iconBackground",
    type: { name: "string", required: true },
    defaultValue: "primary",
    options: ["primary.500", "blue.500"],
    control: {
      type: "select",
    },
  },
  variant: {
    name: "variant",
    type: { name: "string", required: true },
    defaultValue: "unstyled",
    options: ["filled", "outline", "unstyled"],
    control: {
      type: "radio",
    },
  },
  // children: {
  //   name: "children",
  //   type: {
  //     name: "string",
  //     required: true,
  //   },
  //   defaultValue: "Button",
  //   control: {
  //     type: "text",
  //   },
  // },
  isHovered: {
    name: "isHovered",
    type: { name: "boolean" },
    defaultValue: false,

    control: {
      type: "boolean",
    },
  },
};

export const InputGroupArgs = {
  pages: {
    type: "",
    section: "variant",
    row: "backgroundColor",
    component: "states",
  },
  props: {
    backgroundColor: {
      name: "backgroundColor",
      type: { name: "string", required: true },
      defaultValue: "primary.100",
      options: ["primary.100", "blue.100"],
      control: {
        type: "select",
      },
    },
    // iconBackground: {
    //   name: "iconBackground",
    //   type: { name: "string", required: true },
    //   defaultValue: "primary",
    //   options: ["primary.500", "blue.500"],
    //   control: {
    //     type: "select",
    //   },
    // },
    variant: {
      name: "variant",
      type: { name: "string", required: true },
      defaultValue: "unstyled",
      options: ["filled", "outline", "unstyled"],
      control: {
        type: "radio",
      },
    },
    states: [
      {
        default: {
          name: "default",
        },
      },
      {
        isHovered: {
          name: "isHovered",
          type: { name: "boolean" },
          defaultValue: false,
          control: {
            type: "boolean",
          },
        },
      },
    ],
  },

  metaData: {
    heading: "InputGroup",
    "sub-heading": "This is an custom input.",
  },
};
