import type { ComponentProps } from '../../types/core';
import { StyledButton } from './styles';

export type ButtonProps = ComponentProps & {
  onClick: () => void;
  disabled?: boolean;
  type?: 'submit' | 'button';
};

const Button: React.FC<ButtonProps> = ({ text, onClick, styles, disabled, type }) => (
  <StyledButton type={type || 'button'} onClick={onClick} style={styles} disabled={disabled}>
    {text}
  </StyledButton>
);

export default Button;
