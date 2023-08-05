import { render, screen } from '@testing-library/react';

import Columns from './Columns';

describe('columns', () => {
  it('renders without crashing', () => {
    render(<Columns columnsType={'stretch'} />);
    expect(screen.getByTestId('columnsCont')).toBeInTheDocument();
  });
  test('count matches and is the right amount', () => {
    render(<Columns columnsType={'stretch'} />);
    const mainContainer = screen.getByTestId('columnsCont');
    const columnsFirstChild = mainContainer.firstChild;
    const columnsLastChild = mainContainer.lastChild;
    expect(mainContainer.childElementCount).toBe(10);
    expect(columnsFirstChild).toBeInTheDocument();
    expect(columnsLastChild).toBeInTheDocument();
  });
  test('color matches', () => {
    render(<Columns color="#2200ff" columnsType={'stretch'} />);
    const columnsChild = screen.getByTestId('columnsCont').firstChild;
    //expect rowChild to have styles of backgroundColor '#2200ff'
    expect(columnsChild).toHaveStyle({ backgroundColor: '#2200ff' });
  });
  test('direction left correct', () => {
    render(<Columns columnsType={'left'} />);
    const mainContainer = screen.getByTestId('columnsCont');
    expect(mainContainer).toBeInTheDocument();
    expect(mainContainer).toHaveStyle({ flexDirection: 'column' });
  });
  test('direction right correct', () => {
    render(<Columns columnsType={'right'} />);
    const mainContainer = screen.getByTestId('columnsCont');
    expect(mainContainer).toBeInTheDocument();
    expect(mainContainer).toHaveStyle({ flexDirection: 'column-reverse' });
  });
  test('no offset on center', () => {
    render(<Columns columnsType={'stretch'} offset={10} />);
    const columnsFirstChild = screen.getByTestId('columnsCont').firstChild;
    const columnsLastChild = screen.getByTestId('columnsCont').lastChild;
    expect(columnsFirstChild).toBeInTheDocument();
    expect(columnsLastChild).toBeInTheDocument();
    expect(columnsFirstChild).not.toHaveStyle({ marginLeft: '10px' });
    expect(columnsLastChild).not.toHaveStyle({ marginRight: '10px' });
  });
  test('no offset on stretch', () => {
    render(<Columns columnsType={'stretch'} offset={10} />);
    const columnsFirstChild = screen.getByTestId('columnsCont').firstChild;
    const columnsLastChild = screen.getByTestId('columnsCont').lastChild;
    expect(columnsFirstChild).toBeInTheDocument();
    expect(columnsLastChild).toBeInTheDocument();
    expect(columnsFirstChild).not.toHaveStyle({ marginLeft: '10px' });
    expect(columnsLastChild).not.toHaveStyle({ marginRight: '10px' });
  });
  test('offset on left', () => {
    render(<Columns columnsType={'right'} offset={10} />);
    const columnsChild = screen.getByTestId('columnsCont').firstChild;

    expect(columnsChild).toHaveStyle({ marginRight: '10px' });
  });
  test('offset on right', () => {
    render(<Columns columnsType={'left'} offset={10} />);
    const columnsChild = screen.getByTestId('columnsCont').firstChild;

    expect(columnsChild).toHaveStyle({ marginLeft: '10px' });
  });
  test('proper width', () => {
    render(<Columns columnsType={'center'} width={200} />);
    const columnsChild = screen.getByTestId('columnsCont').firstChild;

    expect(columnsChild).toHaveStyle({ width: '200px' });
  });
  test('proper gutter', () => {
    render(<Columns columnsType={'stretch'} gutter={20} />);
    const mainContainer = screen.getByTestId('columnsCont');
    expect(mainContainer).toBeInTheDocument();
    expect(mainContainer).toHaveStyle({ columnGap: '20px' });
  });
});
