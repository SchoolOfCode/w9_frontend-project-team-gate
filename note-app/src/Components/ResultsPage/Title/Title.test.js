import { render, screen } from '@testing-library/react';
import Title from './Title';

test('renders learn react link', () => {
  render(<Title/>);
  const text = screen.getByText('Geta Note');
  expect(text).toBeInTheDocument();
});
