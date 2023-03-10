import { Steps } from '../../types/core';
import { StyledHeader, StepperContainer, LinesContainer, Line } from './styles';

const PRIMARY_COLOR = '#ffffff';
const SECONDARY_COLOR = '#b9bcc0';
const LINE_COLOR = '#595959';
const ACTIVE_LINE_COLOR = '#0072CE';

type HeaderConfigStyles = {
  primaryColor?: string;
  secondaryColor?: string;
  stepLineColor?: string;
  completedStepLineColor?: string;
};

type HeaderProps = {
  steps: Steps;
  currentStep: number;
  headerConfig: HeaderConfigStyles;
};

const Header: React.FC<HeaderProps> = ({
  steps,
  currentStep,
  headerConfig,
}) => {
  const totalSteps = steps.length;
  const {
    primaryColor = PRIMARY_COLOR,
    secondaryColor = SECONDARY_COLOR,
    stepLineColor = LINE_COLOR,
    completedStepLineColor = ACTIVE_LINE_COLOR,
  } = headerConfig;

  return (
    <>
      <StyledHeader color={primaryColor} />
      <StepperContainer color={secondaryColor}>
        <span>{`Step ${currentStep + 1} of ${totalSteps}`}</span>
        <LinesContainer>
          {Array.from({ length: totalSteps }).map((_, index) => (
            <Line
              key={`step${index}`}
              active={index <= currentStep}
              lineColor={stepLineColor}
              activeLineColor={completedStepLineColor}
            />
          ))}
        </LinesContainer>
      </StepperContainer>
    </>
  );
};

export default Header;
