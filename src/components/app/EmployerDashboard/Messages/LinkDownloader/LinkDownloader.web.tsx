import React from 'react';

export const LinkDownloader = ({ children, ...rest }: any) => {
  return <a {...rest}>{children}</a>;
};
