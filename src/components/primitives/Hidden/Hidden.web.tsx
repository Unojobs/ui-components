import { useTheme } from 'native-base';
import React from 'react';
const Hidden = React.memo(({ children, ...props }: any) => {
  const theme = useTheme();
  const breakPoints = Object.keys(theme.breakpoints);

  const { from, till, only } = props;

  const display: any = {};

  if (till) {
    let flag = false;
    for (const i in breakPoints) {
      if (breakPoints[i] !== till) {
        display[breakPoints[i]] = flag ? 'flex' : 'none';
      } else {
        display[breakPoints[i]] = 'none';
        flag = true;
      }
    }
  }
  if (from) {
    let flag = false;
    for (const i in breakPoints) {
      if (breakPoints[i] === from || flag) {
        display[breakPoints[i]] = 'none';
        flag = true;
      } else {
        display[breakPoints[i]] = 'flex';
      }
    }
  }
  if (only) {
    if (Array.isArray(only)) {
      for (const i in breakPoints) {
        if (only.includes(breakPoints[i])) {
          display[breakPoints[i]] = 'none';
        } else {
          display[breakPoints[i]] = 'flex';
        }
      }
    } else {
      display[only] = 'none';
    }
  }

  return React.cloneElement(children, {
    display: display,
  });
});

export { Hidden };
