import React from 'react';
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
    <div style={styles} data-testid="layout">
      {children}
    </div>
  );
};

export default StoryLayout;
