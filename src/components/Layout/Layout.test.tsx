import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { Layout } from './Layout';

describe('Button', () => {
  test('check if element exists', async () => {
    render(<Layout primary label="Click me" />);

    const element = screen.getByText('Click me');

    expect(element).toBeInTheDocument();
  });
});
