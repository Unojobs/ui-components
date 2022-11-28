import React from 'react';
const breakPoints = ['base', 'sm', 'md', 'lg', 'xl'];
const Hidden = React.memo(({ children, ...props }: any) => {
  const { from, till, only } = props;

  let display: any = {};

  if (till) {
    for (const i in breakPoints) {
      if (breakPoints[i] === till) {
        display[breakPoints[i]] = 'none';
      } else {
        display[breakPoints[i]] = 'flex';
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
    display.base = 'flex';
    if (Array.isArray(only)) {
      for (const i in only) {
        display[only[i]] = 'none';
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
