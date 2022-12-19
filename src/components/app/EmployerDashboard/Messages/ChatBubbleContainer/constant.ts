export const STATIC_PROPS = {
  CONTAINER: {
    w: '100%',
    height: '100%',
    px: 6,
    py: 9,
    backgroundColor: 'secondary.500',
    flex: 1,
  },
  MESSAGE: {
    borderRadius: 2,
    px: 4,
    py: 2.5,
    maxWidth: '506px',
  },
  MESSAGE_TEXT: {
    fontSize: 'fontSizes.biggersm',
    lineHeight: '140%',
    letterSpacing: 0.6,
    color: 'textColors.heading1',
  },
  NORMAL_14_FONT: {
    lineHeight: 'fontSizes.biggersm',
    fontSize: 'xs',
  },
} as const;
