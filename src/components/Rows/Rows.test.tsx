import { render, screen } from '@testing-library/react';

import Rows from './Rows';

describe('rows', () => {
  it('renders without crashing', () => {
    render(<Rows rowsType={'stretch'} />);
    expect(screen.getByTestId('rowsCont')).toBeInTheDocument();
  });
  test('count matches and is the right amount', () => {
    render(<Rows rowsType={'stretch'} />);
    const mainContainer = screen.getByTestId('rowsCont');
    const rowsFirstChild = mainContainer.firstChild;
    const rowsLastChild = mainContainer.lastChild;
    expect(mainContainer.childElementCount).toBe(10);
    expect(rowsFirstChild).toBeInTheDocument();
    expect(rowsLastChild).toBeInTheDocument();
  });
  test('color matches', () => {
    render(<Rows color="#2200ff" rowsType={'stretch'} />);
    const rowsChild = screen.getByTestId('rowsCont').firstChild;
    //expect rowChild to have styles of backgroundColor '#2200ff'
    expect(rowsChild).toHaveStyle({ backgroundColor: '#2200ff' });
  });
  test('direction left correct', () => {
    render(<Rows rowsType={'left'} />);
    const mainContainer = screen.getByTestId('rowsCont');
    expect(mainContainer).toBeInTheDocument();
    expect(mainContainer).toHaveStyle({ flexDirection: 'row' });
  });
  test('direction right correct', () => {
    render(<Rows rowsType={'right'} />);
    const mainContainer = screen.getByTestId('rowsCont');
    expect(mainContainer).toBeInTheDocument();
    expect(mainContainer).toHaveStyle({ flexDirection: 'row-reverse' });
  });
  test('no offset on center', () => {
    render(<Rows rowsType={'stretch'} offset={10} />);
    const rowsFirstChild = screen.getByTestId('rowsCont').firstChild;
    const rowsLastChild = screen.getByTestId('rowsCont').lastChild;
    expect(rowsFirstChild).toBeInTheDocument();
    expect(rowsLastChild).toBeInTheDocument();
    expect(rowsFirstChild).not.toHaveStyle({ marginLeft: '10px' });
    expect(rowsLastChild).not.toHaveStyle({ marginRight: '10px' });
  });
  test('no offset on stretch', () => {
    render(<Rows rowsType={'stretch'} offset={10} />);
    const rowsFirstChild = screen.getByTestId('rowsCont').firstChild;
    const rowsLastChild = screen.getByTestId('rowsCont').lastChild;
    expect(rowsFirstChild).toBeInTheDocument();
    expect(rowsLastChild).toBeInTheDocument();
    expect(rowsFirstChild).not.toHaveStyle({ marginLeft: '10px' });
    expect(rowsLastChild).not.toHaveStyle({ marginRight: '10px' });
  });
  test('offset on left', () => {
    render(<Rows rowsType={'right'} offset={10} />);
    const rowsChild = screen.getByTestId('rowsCont').firstChild;

    expect(rowsChild).toHaveStyle({ marginRight: '10px' });
  });
  test('offset on right', () => {
    render(<Rows rowsType={'left'} offset={10} />);
    const rowsChild = screen.getByTestId('rowsCont').firstChild;

    expect(rowsChild).toHaveStyle({ marginLeft: '10px' });
  });
  test('proper width', () => {
    render(<Rows rowsType={'center'} width={200} />);
    const rowsChild = screen.getByTestId('rowsCont').firstChild;

    expect(rowsChild).toHaveStyle({ width: '200px' });
  });
  test('proper gutter', () => {
    render(<Rows rowsType={'stretch'} gutter={20} />);
    const mainContainer = screen.getByTestId('rowsCont');
    expect(mainContainer).toBeInTheDocument();
    expect(mainContainer).toHaveStyle({ columnGap: '20px' });
  });
});
