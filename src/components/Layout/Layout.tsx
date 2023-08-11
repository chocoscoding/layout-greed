/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useState } from 'react';

import { Wrapper } from './Layout.style';
import type { LayoutProps } from './Layout.types';
import { LayoutMain } from './LayoutMain';
import Control from '../Control/Control';
import { LayoutProvider } from '../context/LayoutProvider';

export const Layout = ({ color, ...props }: LayoutProps) => {
  return (
    <LayoutProvider>
      <Wrapper {...props} data-testid="layout">
        <LayoutMain />
        <Control />
      </Wrapper>
    </LayoutProvider>
  );
};
