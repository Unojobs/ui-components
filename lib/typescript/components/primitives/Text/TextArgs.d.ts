export declare const StorybookTextArgs: {
    children: {
        name: string;
        type: {
            name: string;
            required: boolean;
        };
        defaultValue: string;
        control: {
            type: string;
        };
    };
    fontSize: {
        name: string;
        type: {
            name: string;
        };
        defaultValue: string;
        control: {
            type: string;
        };
        options: string[];
    };
    italic: {
        name: string;
        type: {
            name: string;
        };
        defaultValue: boolean;
        control: {
            type: string;
        };
    };
    bold: {
        name: string;
        type: {
            name: string;
        };
        defaultValue: boolean;
        control: {
            type: string;
        };
    };
    underline: {
        name: string;
        type: {
            name: string;
        };
        defaultValue: boolean;
        control: {
            type: string;
        };
    };
    highlight: {
        name: string;
        type: {
            name: string;
        };
        defaultValue: boolean;
        control: {
            type: string;
        };
    };
    sub: {
        name: string;
        type: {
            name: string;
        };
        defaultValue: boolean;
        control: {
            type: string;
        };
    };
    strikeThrough: {
        name: string;
        type: {
            name: string;
        };
        defaultValue: boolean;
        control: {
            type: string;
        };
    };
    isTruncated: {
        name: string;
        type: {
            name: string;
        };
        defaultValue: boolean;
        control: {
            type: string;
        };
    };
};
export declare const TextArgs: {
    pages: {
        type: string;
        section: string;
        row: string;
        component: string;
    };
    props: {
        children: {
            name: string;
            type: {
                name: string;
                required: boolean;
            };
            defaultValue: string;
            control: {
                type: string;
            };
        };
        fontSize: {
            name: string;
            type: {
                name: string;
            };
            defaultValue: string;
            control: {
                type: string;
            };
            options: string[];
        };
        states: ({
            default: {
                name: string;
            };
            italic?: undefined;
            bold?: undefined;
            underline?: undefined;
            highlight?: undefined;
            sub?: undefined;
            strikeThrough?: undefined;
            isTruncated?: undefined;
        } | {
            italic: {
                name: string;
                type: {
                    name: string;
                };
                defaultValue: boolean;
                control: {
                    type: string;
                };
            };
            default?: undefined;
            bold?: undefined;
            underline?: undefined;
            highlight?: undefined;
            sub?: undefined;
            strikeThrough?: undefined;
            isTruncated?: undefined;
        } | {
            bold: {
                name: string;
                type: {
                    name: string;
                };
                defaultValue: boolean;
                control: {
                    type: string;
                };
            };
            default?: undefined;
            italic?: undefined;
            underline?: undefined;
            highlight?: undefined;
            sub?: undefined;
            strikeThrough?: undefined;
            isTruncated?: undefined;
        } | {
            underline: {
                name: string;
                type: {
                    name: string;
                };
                defaultValue: boolean;
                control: {
                    type: string;
                };
            };
            default?: undefined;
            italic?: undefined;
            bold?: undefined;
            highlight?: undefined;
            sub?: undefined;
            strikeThrough?: undefined;
            isTruncated?: undefined;
        } | {
            highlight: {
                name: string;
                type: {
                    name: string;
                };
                defaultValue: boolean;
                control: {
                    type: string;
                };
            };
            default?: undefined;
            italic?: undefined;
            bold?: undefined;
            underline?: undefined;
            sub?: undefined;
            strikeThrough?: undefined;
            isTruncated?: undefined;
        } | {
            sub: {
                name: string;
                type: {
                    name: string;
                };
                defaultValue: boolean;
                control: {
                    type: string;
                };
            };
            default?: undefined;
            italic?: undefined;
            bold?: undefined;
            underline?: undefined;
            highlight?: undefined;
            strikeThrough?: undefined;
            isTruncated?: undefined;
        } | {
            strikeThrough: {
                name: string;
                type: {
                    name: string;
                };
                defaultValue: boolean;
                control: {
                    type: string;
                };
            };
            default?: undefined;
            italic?: undefined;
            bold?: undefined;
            underline?: undefined;
            highlight?: undefined;
            sub?: undefined;
            isTruncated?: undefined;
        } | {
            isTruncated: {
                name: string;
                type: {
                    name: string;
                };
                defaultValue: boolean;
                control: {
                    type: string;
                };
            };
            default?: undefined;
            italic?: undefined;
            bold?: undefined;
            underline?: undefined;
            highlight?: undefined;
            sub?: undefined;
            strikeThrough?: undefined;
        })[];
    };
    metaData: {
        heading: string;
        "sub-heading": string;
    };
};
