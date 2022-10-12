import React from 'react';
import { Fab as NBFab, IFabProps } from 'native-base';
const Fab = ({ ...props }: IFabProps) => {
  return <NBFab {...props}></NBFab>;
};
Fab.displayName = 'FAB';
export default Fab;
