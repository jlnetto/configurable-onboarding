import { useParams, useNavigate, Navigate } from 'react-router-dom';
import Header from '../../components/Header';
import Step from '../../components/Step';
import { Steps } from '../../types/core';
import { useStep } from '../../core/StepContext';


import { client1 } from '../../mocks/client1';
import { client2 } from '../../mocks/client2';
import { client3 } from '../../mocks/client3';

const steps: Steps = client2.steps;
const headerConfig = client2.headerConfig;


const STEP_OFFSET = 1;

const Onboarding = () => {
  const { step } = useParams();
  const currentStep = Number(step) - STEP_OFFSET;
  const stepComponents = steps[currentStep];
  const navigate = useNavigate();
  const { addStepData, clearSteps } = useStep();

  const handleNext = (values: any) => {
    if (Number(step) === steps.length) {
      clearSteps();  
      return navigate(`/onboarding/1`);
    }

    addStepData(values, currentStep);
    return navigate(`/onboarding/${Number(step) + STEP_OFFSET}`);
  };

  const handlePrevious = () => {
    navigate(`/onboarding/${Number(step) - STEP_OFFSET}`);
  };

  if (!stepComponents) return <Navigate to="/onboarding/1" replace />;

  return (
    <>
      <Header
        steps={steps}
        currentStep={currentStep}
        headerConfig={headerConfig}
      />
      <Step
        components={stepComponents}
        onNext={handleNext}
        onPrevious={handlePrevious}
        currentStep={currentStep}
      />
    </>
  );
};

export default Onboarding;
