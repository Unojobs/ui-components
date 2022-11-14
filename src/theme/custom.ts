export const custom = {
  fontConfig: {
    Urbanist: {
      400: {
        normal: 'Urbanist_400Regular',
      },
      500: {
        normal: 'Urbanist_500Medium',
      },
      600: {
        normal: 'Urbanist_600SemiBold',
      },
      700: {
        normal: 'Urbanist_700Bold',
        size: '48px',
      },
    },
  },
  fonts: {
    heading: 'Urbanist',
    body: 'Urbanist',
    mono: 'Urbanist',
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
    },
  },
  fontSizes: {
    appmedium: '22px',
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
    '30': '120px',
  },

  components: {
    //Here we can add default theme for components
    Text: {},
  },
};
