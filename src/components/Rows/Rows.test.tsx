import { render, screen } from '@testing-library/react';

import Rows from './Rows';
import { LayoutProviderTestComponent } from '../context/LayoutProviderTestComponent';

describe('rows', () => {
  it('renders without crashing', () => {
    render(LayoutProviderTestComponent(<Rows />, { rowstype: 'stretch' }));
    expect(screen.getByTestId('rowsCont')).toBeInTheDocument();
  });
  test('count matches and is the right amount', () => {
    render(LayoutProviderTestComponent(<Rows />, { rowstype: 'stretch' }));
    const mainContainer = screen.getByTestId('rowsCont');
    const rowsFirstChild = mainContainer.firstChild;
    const rowsLastChild = mainContainer.lastChild;
    expect(mainContainer.childElementCount).toBe(12);
    expect(rowsFirstChild).toBeInTheDocument();
    expect(rowsLastChild).toBeInTheDocument();
  });
  test('color matches', () => {
    render(
      LayoutProviderTestComponent(<Rows />, {
        color: '#2200ff',
        rowstype: 'stretch',
      })
    );
    const rowsChild = screen.getByTestId('rowsCont').firstChild;
    //expect rowChild to have styles of backgroundColor '#2200ff'
    expect(rowsChild).toHaveStyle({ backgroundColor: '#2200ff' });
  });
  test('direction left correct', () => {
    render(LayoutProviderTestComponent(<Rows />, { rowstype: 'left' }));
    const mainContainer = screen.getByTestId('rowsCont');
    expect(mainContainer).toBeInTheDocument();
    expect(mainContainer).toHaveStyle({ flexDirection: 'row' });
  });
  test('direction right correct', () => {
    render(LayoutProviderTestComponent(<Rows />, { rowstype: 'right' }));
    const mainContainer = screen.getByTestId('rowsCont');
    expect(mainContainer).toBeInTheDocument();
    expect(mainContainer).toHaveStyle({ flexDirection: 'row-reverse' });
  });
  test('no offset on center', () => {
    render(
      LayoutProviderTestComponent(<Rows />, { rowstype: 'stretch', offset: 10 })
    );
    const rowsFirstChild = screen.getByTestId('rowsCont').firstChild;
    const rowsLastChild = screen.getByTestId('rowsCont').lastChild;
    expect(rowsFirstChild).toBeInTheDocument();
    expect(rowsLastChild).toBeInTheDocument();
    expect(rowsFirstChild).not.toHaveStyle({ marginLeft: '10px' });
    expect(rowsLastChild).not.toHaveStyle({ marginRight: '10px' });
  });
  test('no offset on stretch', () => {
    render(
      LayoutProviderTestComponent(<Rows />, { rowstype: 'stretch', offset: 10 })
    );
    const rowsFirstChild = screen.getByTestId('rowsCont').firstChild;
    const rowsLastChild = screen.getByTestId('rowsCont').lastChild;
    expect(rowsFirstChild).toBeInTheDocument();
    expect(rowsLastChild).toBeInTheDocument();
    expect(rowsFirstChild).not.toHaveStyle({ marginLeft: '10px' });
    expect(rowsLastChild).not.toHaveStyle({ marginRight: '10px' });
  });
  test('offset on left', () => {
    render(
      LayoutProviderTestComponent(<Rows />, { rowstype: 'right', offset: 10 })
    );
    const rowsChild = screen.getByTestId('rowsCont').firstChild;

    expect(rowsChild).toHaveStyle({ marginRight: '10px' });
  });
  test('offset on right', () => {
    render(
      LayoutProviderTestComponent(<Rows />, { rowstype: 'left', offset: 10 })
    );
    const rowsChild = screen.getByTestId('rowsCont').firstChild;

    expect(rowsChild).toHaveStyle({ marginLeft: '10px' });
  });
  test('proper width', () => {
    render(
      LayoutProviderTestComponent(<Rows />, { rowstype: 'center', width: 200 })
    );
    const rowsChild = screen.getByTestId('rowsCont').firstChild;

    expect(rowsChild).toHaveStyle({ width: '200px' });
  });
  test('proper gutter', () => {
    render(
      LayoutProviderTestComponent(<Rows />, { rowstype: 'stretch', gutter: 20 })
    );
    const mainContainer = screen.getByTestId('rowsCont');
    expect(mainContainer).toBeInTheDocument();
    expect(mainContainer).toHaveStyle({ columnGap: '20px' });
  });
});
