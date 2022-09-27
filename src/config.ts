import { StorybookInputGroupArgs } from "./components/composites";
import {
  StorybookButtonArgs,
  StorybookCheckboxArgs,
  StorybookHeadingArgs,
  StorybookIconArgs,
  StorybookInputArgs,
  StorybookLinkArgs,
  StorybookRadioArgs,
  StorybookSwitchArgs,
  StorybookTextAreaArgs,
  StorybookTextArgs,
  // StorybookTextArgs,
} from "./components/primitives";
import { myTheme } from "./theme";

export const config = {
  components: {
    Button: {
      args: StorybookButtonArgs,
      pageConfig: {
        type: "variant",
        section: "size",
        row: "colorScheme",
        component: "states",
        metaData: {
          heading: "This is a Button.",
        },
      },
    },
    Text: {
      args: StorybookTextArgs,
      pageConfig: {
        type: "",
        section: "component",
        row: "fontSize",
        component: "states",
        metaData: {
          heading: "Typography",
          "sub-heading": "Text",
        },
      },
    },
    Heading: {
      args: StorybookHeadingArgs,
      pageConfig: {
        type: "",
        section: "component",
        row: "fontSize",
        component: "states",
        metaData: {
          heading: "Typography",
          "sub-heading": "Heading",
        },
      },
    },
    // HeadingText: {
    //   args: StorybookHeadingTextArgs,
    //   pageConfig: {
    //     type: "",
    //     section: "component",
    //     row: "fontSize",
    //     component: "states",
    //     metaData: {
    //       heading: "Typography",
    //       "sub-heading": "Heading",
    //     },
    //   },
    // },
    InputGroup: {
      args: StorybookInputGroupArgs,
      pageConfig: {
        type: "",
        section: "variant",
        row: "backgroundColor",
        component: "states",
        metaData: {
          heading: "InputGroup",
          "sub-heading": "This is an custom input.",
        },
      },
    },
    Input: {
      args: StorybookInputArgs,
      pageConfig: {
        type: "variant",
        section: "component",
        row: "size",
        component: "states",
        metaData: {
          heading: "This is an Input.",
        },
      },
    },
    TextArea: {
      args: StorybookTextAreaArgs,
      pageConfig: {
        type: "",
        section: "component",
        row: "",
        component: "states",
        metaData: {
          heading: "This is an Input.",
        },
      },
    },
    Checkbox: {
      args: StorybookCheckboxArgs,
      pageConfig: {
        type: "",
        section: "size",
        row: "colorScheme",
        component: "states",
        metaData: {
          heading: "This is checkbox.",
        },
      },
    },
    Radio: {
      args: StorybookRadioArgs,
      pageConfig: {
        type: "",
        section: "size",
        row: "colorScheme",
        component: "states",
        metaData: {
          heading: "This is Radio.",
        },
      },
    },
    Link: {
      args: StorybookLinkArgs,
      pageConfig: {
        type: "",
        section: "",
        row: "href",
        component: "states",
        metaData: {
          heading: "This is Link.",
        },
      },
    },
    // Slider: {
    //   args: StorybookSliderArgs,
    //   pageConfig: {
    //     type: "",
    //     section: "size",
    //     row: "colorScheme",
    //     component: "states",
    //     metaData: {
    //       heading: "This is Slider.",
    //     },
    //   },
    // },
    // Select: {
    //   args: StorybookSliderArgs,

    //   pageConfig: {
    //     type: "",
    //     section: "size",
    //     row: "colorScheme",
    //     component: "states",
    //     metaData: {
    //       heading: "This is Slider.",
    //     },
    //   },
    // },
    Switch: {
      args: StorybookSwitchArgs,
      pageConfig: {
        type: "",
        section: "size",
        row: "colorScheme",
        component: "states",
        metaData: {
          heading: "This is a switch.",
        },
      },
    },
    AddIcon: {
      args: {
        size: { ...StorybookIconArgs.size },
      },
      pageConfig: {
        type: "",
        section: "component",
        row: "size",
        component: "states",
        metaData: {
          heading: "Add Icon.",
        },
      },
    },
    Icon: {
      args: {
        size: { ...StorybookIconArgs.size },
        as: {
          name: "as",
          type: {
            name: "string",
          },
          control: {
            type: "select",
          },
          options: ["Entypo"],
        },
        name: {
          name: "name",
          type: {
            name: "string",
          },
          options: [
            "500px",
            "add-to-list",
            "add-user",
            "address",
            "adjust",
            "attachment",
            "folder",
            "infinity",
            "instagram",
          ],
          control: {
            type: "select",
          },
        },
      },
      pageConfig: {
        type: "",
        section: "name",
        row: "size",
        component: "states",
        metaData: {
          heading: "Icons",
          "sub-heading": "Few icons from Entypo lib.",
        },
      },
    },
  },
  foundation: {
    Colors: {},
  },
  theme: myTheme,
  metaData: {},
  hooks: {},
};
