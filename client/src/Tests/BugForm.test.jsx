import { render, screen, fireEvent } from '@testing-library/react';
import BugForm from '../components/BugForm';

test('renders input and button', () => {
  render(<BugForm onBugAdded={()=> {}} />);
  expect(screen.getByPlaceholderText(/bug title/i)).toBeInTheDocument();
  expect(screen.getByText(/add bug/i)).toBeInTheDocument();
});