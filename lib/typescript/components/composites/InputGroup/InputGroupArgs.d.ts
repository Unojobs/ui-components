export declare const StorybookInputGroupArgs: {
    backgroundColor: {
        name: string;
        type: {
            name: string;
            required: boolean;
        };
        defaultValue: string;
        options: string[];
        control: {
            type: string;
        };
    };
    iconBackground: {
        name: string;
        type: {
            name: string;
            required: boolean;
        };
        defaultValue: string;
        options: string[];
        control: {
            type: string;
        };
    };
    variant: {
        name: string;
        type: {
            name: string;
            required: boolean;
        };
        defaultValue: string;
        options: string[];
        control: {
            type: string;
        };
    };
    isHovered: {
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
export declare const InputGroupArgs: {
    pages: {
        type: string;
        section: string;
        row: string;
        component: string;
    };
    props: {
        backgroundColor: {
            name: string;
            type: {
                name: string;
                required: boolean;
            };
            defaultValue: string;
            options: string[];
            control: {
                type: string;
            };
        };
        variant: {
            name: string;
            type: {
                name: string;
                required: boolean;
            };
            defaultValue: string;
            options: string[];
            control: {
                type: string;
            };
        };
        states: ({
            default: {
                name: string;
            };
            isHovered?: undefined;
        } | {
            isHovered: {
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
        })[];
    };
    metaData: {
        heading: string;
        "sub-heading": string;
    };
};
