import React from 'react';
import { Fab as NBFab, IFabProps } from 'native-base';
const Fab = React.memo(({ ...props }: IFabProps) => {
  return <NBFab {...props} />;
});
Fab.displayName = 'FAB';
export default Fab;
