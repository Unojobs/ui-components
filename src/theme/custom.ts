export const custom = {
  fontConfig: {
    Lato: {
      400: {
        normal: 'Lato',
      },
      700: {
        normal: 'Lato',
      },
    },
    RobotoSlab: {
      400: {
        normal: 'RobotoSlab',
      },
    },
  },
  fonts: {
    heading: 'Lato',
    body: 'RobotoSlab',
    mono: 'RobotoSlab',
  },
  colors: {
    primary: {
      '50': '#ECF8FD',
      '100': '#EFF3FA', // icon background color
      '200': '#EBF4FF', // border color
      '300': '#0066FF', // span text color
      '400': '#0091D8', // linear-gradient color
      '500': '#4169E0', // main-blue color
      '600': '#00BAFB',
      '700': '#0C1A6B', // footer color
      '800': '#192252', // arrowIcon background color
      '900': '#6E91EC',
    }, // blue colors
    secondary: {
      '300': '#FFFFFF',
      '400': '#F3F3F3',
      '500': '#FAFAFA',
      '600': '#FAFAFB',
      '700': '#FCFCFC',
      '800': '#E7E7E7',
      '900': '#EFF3FA',
      '950': '#0A0A0A',
    }, // white-gray colors
    success: {
      '200': '#F2FDDF',
      '300': '#DDEDD5',
      '400': '#89D860',
      '500': '#73C04B',
      '600': '#66B949',
      '700': '#479B36',
    }, // green colors
    error: {
      '400': '#FEE9DE',
      '500': '#EB5757',
    }, //red colors
    textColors: {
      primary: '#111111',
      secondary: '#FFFFFF',
      subtitle: '#707070',
      caption: '#B7B7B7',
      highlight: '#0066FF',
      overline: '#203AA1',
      subtitle2: '#EEEEEE',
      heading1: '#080304',
    },
    notificationColors: {
      success: '#73C04B',
      error: '#EB5757',
      warning: '#fb923c',
      info: '#0ea5e9',
    },
  },
  fontSizes: {
    appmedium: '22px',
    biggersm: '14px',
    title: '24px',
  },
  lineHeights: {
    sm: '1.2em', // fontSize : 48px, lineHeight : 57.6px
    md: '1.375em', // fontSize : 72px, lineHeight : 100px ||  fontSize : 22px, lineHeight : 30px
    lg: '1.4em', // fontSize : 16px, lineHeight : 22.4px
    xl: '1.66em', // fontSize: 18px, lineHeight : 30px
  },
  space: {
    '12.5': '50px',
    '15': '60px',
  },

  components: {
    //Here we can add default theme for components
    Text: {},
  },
};
