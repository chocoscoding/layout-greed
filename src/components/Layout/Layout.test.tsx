import { render, screen } from '@testing-library/react';
import React from 'react';

import { Layout } from './Layout';

describe('Layout', () => {
  test('check if element exists', async () => {
    render(<Layout color="#fff" />);

    const element = screen.getByTestId('layout');

    expect(element).toBeInTheDocument();
  });
  test('check if element does not exist on disable', async () => {
    render(<Layout color="#fff" disable={true} />);
    const element = screen.queryByTestId('layout');
    expect(element).not.toBeInTheDocument();
  });
});
