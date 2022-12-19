export const STATIC_PROPS = {
  CONTAINER_PRESSABLE: {
    padding: 4,
    borderRadius: 'lg',
  },
  CANDIDATE: {
    CONTAINER: {
      width: 'full',
      height: 'full',
      space: '4',
      flexGrow: 1,
    },
    LATEST_MESSAGE: {
      fontSize: 'xs',
      letterSpacing: 0.16,
      fontWeight: 'normal',
    },
    BADGE: {
      borderRadius: 'xs',
      padding: 3,
      paddingBottom: '5px',
      paddingTop: '5px',
    },
  },
  FONT_SMALL_NORMAL: {
    fontSize: 'xs',
    fontWeight: 'normal',
  },
  FONT_SMALL_MEDIUM: {
    fontSize: 'xs',
    fontWeight: 'medium',
  },
  FONT_MEDIUM_SEMIBOLD: { fontSize: 'md', fontWeight: 600 },
  WHITE: 'textColors.secondary',
  BLACK: 'textColors.subtitle',
  ALL_BLACK: 'textColors.primary',
  MEDIUM_BLACK: 'textColors.heading1',
} as const;
