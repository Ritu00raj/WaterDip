import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

test('renders dashboard and interacts with date pickers', () => {
  render(<App />);
  const startDatePicker = screen.getByPlaceholderText('Start Date');
  fireEvent.change(startDatePicker, { target: { value: '2024-01-01' } });

  const endDatePicker = screen.getByPlaceholderText('End Date');
  fireEvent.change(endDatePicker, { target: { value: '2024-01-07' } });

  expect(screen.getByText('Hotel Booking Dashboard')).toBeInTheDocument();
});
