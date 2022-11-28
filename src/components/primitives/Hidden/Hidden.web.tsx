import React from 'react';
const Hidden = React.memo(({ children, ...props }: any) => {
  const { from, till, only } = props;

  let display: any = {};

  if (till) {
    display = { base: 'none', [till]: 'flex' };
  }
  if (from) {
    display = { base: 'flex', [from]: 'flex' };
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
