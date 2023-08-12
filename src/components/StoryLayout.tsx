import React from 'react';

import { LayoutProvider } from './context/LayoutProvider';
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
  outline: '1px solid pink',
};
const StoryLayout = ({ children }: { children: any }) => {
  return (
    <LayoutProvider>
      <div style={styles} data-testid="layout">
        {children}
      </div>
    </LayoutProvider>
  );
};

export default StoryLayout;
