import { render, screen } from '@testing-library/react';

import Column from './Column';

describe('Column', () => {
  it('renders without crashing', () => {
    render(<Column columnType={'stretch'} />);
    expect(screen.getByTestId('columnCont')).toBeInTheDocument();
  });
  test('color matches', () => {
    render(<Column color="#2200ff" columnType={'stretch'} />);
    const columnChild = screen.getByTestId('columnCont').firstChild;
    //expect both of them to be in the document
    expect(columnChild).toBeInTheDocument();
    //expect both of them to have styles of backgroundColor '#2200ff'
    expect(columnChild).toHaveStyle({ backgroundColor: '#2200ff' });
  });
});
