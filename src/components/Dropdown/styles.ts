import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 6px;
  margin: 40px 0;
  width: 300px;
  font-family: 'Roboto, sans-serif';
  position: relative;

  @media (min-width: 768px) {
    width: 335px;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  color: #1a1a1a;
`;

export const StyledDropdown = styled.div`
  padding: 20px 12px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(185, 188, 192);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  &:active,
  :focus {
    outline: -webkit-focus-ring-color auto 1px;
  }
`;

export const DropdownItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  background: #ffffff;
  border: 1px solid #d9d9d6;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  position: absolute;
  top: 100%;
  width: inherit;
  max-height: 406px;
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: 5px;
`;

export const Item = styled.div<{ customBackground?: string; }>`
  width: 93%;
  padding: 12px;
  cursor: pointer;

  &:hover {
    background-color: ${({ customBackground }) =>
      customBackground ? customBackground : '#0072ce'};
    color: #ffffff;
  }
`;

export const HiddenInput = styled.input`
  display: none;
`;
