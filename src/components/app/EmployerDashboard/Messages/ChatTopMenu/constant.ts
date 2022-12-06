export const STATIC_PROPS = {
  CONTAINER: {
    pt: 4,
    width: 'full',
    height: 'full',
    space: 12,
    borderColor: 'secondary.400',
    borderWidth: 1,
    overflow: 'scroll',
    borderBottomWidth: 0,
  },
  PROFILE: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 'full',
    minWidth: '700px',
    px: '22px',
  },
  FONT_14_SEMIBOLD: {
    fontSize: 'fontSizes.biggersm',
    fontWeight: 500,
  },
  FONT_16_SEMIBOLD: {
    fontSize: 'md',
    fontWeight: 500,
  },
  FONT_12_SEMIBOLD: {
    fontSize: 'xs',
    fontWeight: 500,
  },
  CENTER_SPACE_12: {
    alignItems: 'center',
    space: 3,
  },
  FIT_CONTENT_TRANSPARENT: {
    width: 'fit-content',
    height: 'fit-content',
    padding: '0',
    backgroundColor: 'transparent',
  },
  BUTTON_CONTAINER: {
    px: 5,
    py: 2.5,
    borderColor: 'secondary.400',
    borderWidth: '1.5px',
    space: 5,
  },
  DIVIDER: {
    width: '1px',
    height: '70px',
    marginRight: 4,
    orientation: 'vertical',
  },
  TAB_BAR_STYLE: { margin: '0', padding: '0 22px' },
} as const;
