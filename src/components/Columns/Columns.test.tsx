import { render, screen } from '@testing-library/react';

import Columns from './Columns';
import { LayoutProviderTestComponent } from '../context/LayoutProviderTestComponent';

describe('columns', () => {
  it('renders without crashing', () => {
    render(
      LayoutProviderTestComponent(<Columns />, {
        columnstype: 'stretch',
      })
    );
    expect(screen.getByTestId('columnsCont')).toBeInTheDocument();
  });

  test('count matches and is the right amount', () => {
    render(
      LayoutProviderTestComponent(<Columns />, {
        columnstype: 'stretch',
      })
    );
    const mainContainer = screen.getByTestId('columnsCont');
    const columnsFirstChild = mainContainer.firstChild;
    const columnsLastChild = mainContainer.lastChild;
    expect(mainContainer.childElementCount).toBe(12);
    expect(columnsFirstChild).toBeInTheDocument();
    expect(columnsLastChild).toBeInTheDocument();
  });

  test('color matches', () => {
    render(
      LayoutProviderTestComponent(<Columns />, {
        columnstype: 'stretch',
        color: '#2200ff',
      })
    );
    const columnsChild = screen.getByTestId('columnsCont').firstChild;
    //expect rowChild to have styles of backgroundColor '#2200ff'
    expect(columnsChild).toHaveStyle({ backgroundColor: '#2200ff' });
  });

  test('direction top correct', () => {
    render(
      LayoutProviderTestComponent(<Columns />, {
        columnstype: 'top',
      })
    );
    const mainContainer = screen.getByTestId('columnsCont');
    expect(mainContainer).toBeInTheDocument();
    expect(mainContainer).toHaveStyle({ flexDirection: 'column' });
  });

  test('direction bottom correct', () => {
    render(
      LayoutProviderTestComponent(<Columns />, {
        columnstype: 'bottom',
      })
    );
    const mainContainer = screen.getByTestId('columnsCont');
    expect(mainContainer).toBeInTheDocument();
    expect(mainContainer).toHaveStyle({ flexDirection: 'column-reverse' });
  });

  test('no offset on center', () => {
    render(
      LayoutProviderTestComponent(<Columns />, {
        columnstype: 'stretch',
        offset: 10,
      })
    );
    const columnsFirstChild = screen.getByTestId('columnsCont').firstChild;
    const columnsLastChild = screen.getByTestId('columnsCont').lastChild;
    expect(columnsFirstChild).toBeInTheDocument();
    expect(columnsLastChild).toBeInTheDocument();
    expect(columnsFirstChild).not.toHaveStyle({ marginTop: '10px' });
    expect(columnsLastChild).not.toHaveStyle({ marginBottom: '10px' });
  });

  test('no offset on stretch', () => {
    render(
      LayoutProviderTestComponent(<Columns />, {
        columnstype: 'stretch',
        offset: 10,
      })
    );
    const columnsFirstChild = screen.getByTestId('columnsCont').firstChild;
    const columnsLastChild = screen.getByTestId('columnsCont').lastChild;
    expect(columnsFirstChild).toBeInTheDocument();
    expect(columnsLastChild).toBeInTheDocument();
    expect(columnsFirstChild).not.toHaveStyle({ marginTop: '10px' });
    expect(columnsLastChild).not.toHaveStyle({ marginBottom: '10px' });
  });

  test('offset on bottom', () => {
    render(
      LayoutProviderTestComponent(<Columns />, {
        columnstype: 'bottom',
        offset: 10,
      })
    );
    const columnsChild = screen.getByTestId('columnsCont').firstChild;

    expect(columnsChild).toHaveStyle({ marginBottom: '10px' });
  });

  test('offset on top', () => {
    render(
      LayoutProviderTestComponent(<Columns />, {
        columnstype: 'top',
        offset: 10,
      })
    );
    const columnsChild = screen.getByTestId('columnsCont').firstChild;

    expect(columnsChild).toHaveStyle({ marginTop: '10px' });
  });

  test('proper height', () => {
    render(
      LayoutProviderTestComponent(<Columns />, {
        columnstype: 'center',
        width: 200,
      })
    );
    const columnsChild = screen.getByTestId('columnsCont').firstChild;

    expect(columnsChild).toHaveStyle({ height: '200px' });
  });

  test('proper gutter', () => {
    render(
      LayoutProviderTestComponent(<Columns />, {
        columnstype: 'stretch',
        gutter: 20,
      })
    );
    const mainContainer = screen.getByTestId('columnsCont');
    expect(mainContainer).toBeInTheDocument();
    expect(mainContainer).toHaveStyle({ rowGap: '20px' });
  });
});
