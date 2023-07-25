/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';

import type {
  LayoutProps,
  LayoutTypesType,
  MainSettingsType,
  SecondarySettings,
} from './Layout.types';
import Grid from '../Grid/Grid';

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

  const [layoutType, setLayoutType] = useState<LayoutTypesType>('grid');
  const [mainSettings, setMainSettings] = useState<MainSettingsType>({
    size: 10,
    gutter: 10,
  });
  const [secondarySettings, setSecondarySettings] = useState<SecondarySettings>(
    {
      count: 10,
      offset: 0,
      height: 0,
      rowsType: 'Stretch',
      columnsType: 'Stretch',
    }
  );

  //function for onchange of each element in mainSettings
  const mainSettingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMainSettings((prevState) => ({ ...prevState, [name]: value }));
  };
  //function for onchange of each element in secondarySettings
  const secondarySettingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSecondarySettings((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <div style={styles} {...props} data-testid="layout">
      <Grid color={color} size={mainSettings.size} />
    </div>
  );
};
