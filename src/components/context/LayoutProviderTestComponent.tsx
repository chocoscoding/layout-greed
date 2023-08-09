import { LayoutProvider } from './LayoutProvider';
import { LayoutContextType } from './LayoutProvider.type';

export function LayoutProviderTestComponent(
  children: React.ReactNode,
  testValue: Partial<LayoutContextType>
) {
  return <LayoutProvider testValue={testValue}>{children}</LayoutProvider>;
}
