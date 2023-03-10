import styled from 'styled-components';

export const StyledButton = styled.button`
  font-size: 18px;
  text-transform: uppercase;
  padding: 11.5px 40px 9px;
  border-radius: 50px;
  border: none;
  font-weight: 700;
  cursor: pointer;
  min-width: 135px;

  &:hover {
    transition: background-color 0.2s ease;
    opacity: 0.8;
  }

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
    opacity: 0.7;
  }

  &:active {
    transform: ${({ disabled }) => (disabled ? 'none' : 'scale(0.95)')};
  }
`;
