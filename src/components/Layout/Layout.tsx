import React from 'react';

import type { LayoutProps, LayoutSizesType } from './Layout.types';

export const Layout = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  color,
  ...props
}: LayoutProps) => {
  const styles: React.CSSProperties = {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    backgroundColor,
    margin: '0',
  };

  return (
    <div style={styles} {...props}>
      {label}
    </div>
  );
};
