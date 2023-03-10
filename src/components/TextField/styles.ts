import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 300px;
  font-family: 'Arial';
  font-weight: 400;
  margin-top: 40px;

  @media (min-width: 768px) {
    width: 335px;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  color: #1a1a1a;
`;

export const StyledInput = styled.input`
  padding: 20px 12px;
  background: #ffffff;
  border: 1px solid #b9bcc0;
  border-radius: 4px;
`;

export const Hint = styled.span`
  font-size: 11px;
  color: #707070;
`;
