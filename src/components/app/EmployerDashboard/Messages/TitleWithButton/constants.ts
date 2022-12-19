export const STATIC_PROPS = {
  HSTACK_CONTAINER: {
    width: 'full',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HEADING: {
    fontSize: '2xl',
    fontWeight: 500,
    titleColor: 'textColors.heading1',
  },
  BUTTON: { width: '81px', height: '40px' },
  BUTTON_HSTACK: {
    alignItems: 'center',
    width: 'full',
    height: 'full',
    fontSize: 'xs',
    space: 2,
    backgroundColor: 'colors.primary.500',
  },
  BUTTON_TEXT: {
    fontSize: 'xs',
    fontWeight: 500,
    letterSpacing: 0.16,
    lineHeight: 22,
    color: 'textColors.secondary',
  },
  ICON: {
    color: '#fff',
  },
} as const;
