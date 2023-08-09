/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useState } from 'react';

import type {
  LayoutProps,
  LayoutTypesType,
  MainSettingsType,
  SecondarySettings,
} from './Layout.types';
import Columns from '../Columns/Columns';
import Control from '../Control/Control';
import Grid from '../Grid/Grid';
import Rows from '../Rows/Rows';
import LayoutContext, { LayoutProvider } from '../context/LayoutProvider';

export const Layout = ({ color, ...props }: LayoutProps) => {
  const styles: React.CSSProperties = {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'transparent',
    margin: '0',
    overflow: 'hidden',
    position: 'absolute',
    top: '0px',
    left: '0px',
    outline: '10px solid pink',
  };

  const [mainSettings, setMainSettings] = useState<MainSettingsType>({
    size: 10,
    gutter: 10,
  });
  const { size } = useContext(LayoutContext);

  return (
    <LayoutProvider>
      <div style={styles} {...props} data-testid="layout">
        <Grid />
        <Rows />
        <Columns />
        <Control />
      </div>
    </LayoutProvider>
  );
};
