import { render, screen } from '@testing-library/react';

import Grid from './Grid';
import { LayoutProviderTestComponent } from '../context/LayoutProviderTestComponent';

describe('Grid', () => {
  it('renders without crashing', () => {
    render(LayoutProviderTestComponent(<Grid />, { size: 1 }));
    expect(screen.getByTestId('gridCont')).toBeInTheDocument();
  });
  test('color matches', () => {
    render(
      LayoutProviderTestComponent(<Grid />, { color: '#2200ff', size: 1 })
    );
    const oneHorizontalNode =
      screen.getByTestId('horizontalGridCont').firstChild;
    const oneVerticalNode = screen.getByTestId('verticalGridCont').firstChild;

    //expect both of them to be in the document
    expect(oneHorizontalNode).toBeInTheDocument();
    expect(oneVerticalNode).toBeInTheDocument();
    //expect both of them to have styles of backgroundColor '#2200ff'
    expect(oneHorizontalNode).toHaveStyle({ backgroundColor: '#2200ff' });
    expect(oneVerticalNode).toHaveStyle({ backgroundColor: '#2200ff' });
  });
  test('screen dimensions should match row and column nodes', () => {
    render(LayoutProviderTestComponent(<Grid />, { size: 1 }));
    const horizontalContainer =
      screen.getByTestId('horizontalGridCont').childElementCount;
    const verticalContainer =
      screen.getByTestId('verticalGridCont').childElementCount;

    expect(horizontalContainer).toBe(768);
    expect(verticalContainer).toBe(1024);
  });
});
