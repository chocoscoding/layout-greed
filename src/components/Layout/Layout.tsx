import type { LayoutProps } from './Layout.types';
import { LayoutMain } from './LayoutMain';
import Control from '../Control/Control';
import { LayoutProvider } from '../context/LayoutProvider';
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
  pointerEvents: 'none',
  outline: '10px solid pink',
};
export const Layout = ({
  hide,
  color,
  customKeyBinding,
  ...props
}: LayoutProps) => {
  if (hide) return <></>;
  return (
    <LayoutProvider>
      <div style={styles} {...props} data-testid="layout">
        <LayoutMain />
        <Control customKeyBinding={customKeyBinding} />
      </div>
    </LayoutProvider>
  );
};
