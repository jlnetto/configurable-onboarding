import { render, fireEvent } from '@testing-library/react';
import Button, { ButtonProps } from './Button';

describe('Button', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    handleClick.mockClear();
  });

  test('renders with text', () => {
    const props: ButtonProps = { text: 'Click me', onClick: handleClick };
    const { getByText } = render(<Button {...props} />);
    expect(getByText('Click me')).toBeInTheDocument();
  });

  test('renders with default button type', () => {
    const props: ButtonProps = { text: 'Click me', onClick: handleClick };
    const { getByText } = render(<Button {...props} />);
    expect(getByText('Click me')).toHaveAttribute('type', 'button');
  });

  test('renders with submit button type', () => {
    const props: ButtonProps = { text: 'Submit', onClick: handleClick, type: 'submit' };
    const { getByText } = render(<Button {...props} />);
    expect(getByText('Submit')).toHaveAttribute('type', 'submit');
  });

  test('calls onClick handler when clicked', () => {
    const props: ButtonProps = { text: 'Click me', onClick: handleClick };
    const { getByText } = render(<Button {...props} />);
    fireEvent.click(getByText('Click me'));
    expect(handleClick).toHaveBeenCalled();
  });

  test('does not call onClick handler when disabled', () => {
    const props: ButtonProps = { text: 'Click me', onClick: handleClick, disabled: true };
    const { getByText } = render(<Button {...props} />);
    fireEvent.click(getByText('Click me'));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
