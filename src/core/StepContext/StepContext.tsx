import { createContext, useState, useContext } from 'react';

type StepData = Record<string, string>

type StepContextType = {
  stepData: StepData[];
  addStepData: (data: StepData, currentStep: number) => void;
  clearSteps: () => void;
}

export const StepContext = createContext<StepContextType>({
  stepData: [],
  addStepData: () => {},
  clearSteps: () => {},
});

export const StepProvider: React.FC<{ children: JSX.Element[] }> = ({ children }) => {
  const [stepData, setStepData] = useState<StepData[]>([]);

  const addStepData = (data: StepData, currentStep: number) => {
    const newData = [...stepData];
    newData.splice(currentStep, 1, data);
    setStepData(newData);
  };

  const clearSteps = () => {
    setStepData([]);
  };

  return (
    <StepContext.Provider value={{ stepData, addStepData, clearSteps }}>
      {children}
    </StepContext.Provider>
  );
};

export function useStep() {
  const context = useContext(StepContext);
  if (context === undefined) {
    throw new Error('useSettings must be used inside its provider.');
  }
  return context;
}

