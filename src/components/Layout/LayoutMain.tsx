/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from 'react';

import Columns from '../Columns/Columns';
import Grid from '../Grid/Grid';
import Rows from '../Rows/Rows';
import LayoutContext from '../context/LayoutProvider';

export const LayoutMain = () => {
  const { LayoutType } = useContext(LayoutContext);

  return (
    <>
      {LayoutType === 'Grid' ? <Grid /> : null}
      {LayoutType === 'Rows' ? <Rows /> : null}
      {LayoutType === 'Columns' ? <Columns /> : null}
    </>
  );
};
