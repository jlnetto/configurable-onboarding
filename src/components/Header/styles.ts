import styled from 'styled-components';

export const StyledHeader = styled.div<{ color: string }>`
  height: 73px;
  background: ${({ color }) => `${color}` };
`;

export const StepperContainer = styled.div<{ color: string }>`
  display: flex;
  background: ${({ color }) => `${color}` };
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 30px;
  font-family: 'Roboto sans-serif';
`;

export const LinesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

export const Line = styled.div<{
  active: boolean;
  lineColor: string;
  activeLineColor: string;
}>`
  background: ${({ active, activeLineColor, lineColor }) =>
    active ? `${activeLineColor}` : `${lineColor}`};
  width: 80px;
  height: 4px;
`;
