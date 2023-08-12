import { render, screen } from '@testing-library/react';

import Control from './Control';
import { LayoutProviderTestComponent } from '../context/LayoutProviderTestComponent';

describe('controls', () => {
  it('renders without crashing', () => {
    render(LayoutProviderTestComponent(<Control />, {}));
    expect(screen.getByTestId('controlsContainer')).toBeInTheDocument();
  });
});
