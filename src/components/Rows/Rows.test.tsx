import { render, screen } from '@testing-library/react';

import Rows from './Rows';

describe('rows', () => {
  it('renders without crashing', () => {
    render(<Rows rowsType={'stretch'} />);
    expect(screen.getByTestId('rowsCont')).toBeInTheDocument();
  });
  test('color matches', () => {
    render(<Rows color="#2200ff" rowsType={'stretch'} />);
    const rowsChild = screen.getByTestId('rowsCont').firstChild;
    //expect both of them to be in the document
    expect(rowsChild).toBeInTheDocument();
    //expect both of them to have styles of backgroundColor '#2200ff'
    expect(rowsChild).toHaveStyle({ backgroundColor: '#2200ff' });
  });
});
