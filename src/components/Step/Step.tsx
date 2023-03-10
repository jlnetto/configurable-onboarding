import { useEffect } from 'react';
import * as z from 'zod';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import ComponentSelector from '../../core/ComponentSelector';

import { Container, ContentContainer } from './styles';
import { useStep } from '../../core/StepContext';
import { ComponentsConfig, ComponentTypes } from '../../types/core';

const dynamicFormSchema = z.record(z.string().nonempty());

const componentThatNeedsDefaultValues = [
  ComponentTypes.TEXT_FIELD,
  ComponentTypes.DROPDOWN,
];

const buildDefaultValues = (components: ComponentsConfig[], values?: Record<string, string>) => {
  if (values) return values;

  return components.reduce((acc, componentData) => {
    if (!componentThatNeedsDefaultValues.includes(componentData.type)) return acc;

    return { ...acc, [componentData?.data?.name ?? '']: '' };
  }, {});
};

type Schema = z.infer<typeof dynamicFormSchema>;

const Step = ({ components, onNext, onPrevious, currentStep }: any) => {
  const { stepData } = useStep();
  const { handleSubmit, reset, ...formMethods } = useForm<Schema>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    criteriaMode: 'all',
    defaultValues: buildDefaultValues(components, stepData[currentStep]),
    resolver: zodResolver(dynamicFormSchema),
  });
  const { isValid } = formMethods.formState;

  const methods = {
    ...formMethods,
    reset,
    handleSubmit,
  };

  useEffect(() => {
    reset(stepData[currentStep]);
  }, [components]);

  return (
    <FormProvider {...methods}>
      <Container>
        <ContentContainer>
          {components.map((component: any, index: number) => (
            <ComponentSelector
              key={index}
              {...component}
              isValid={isValid}
              onNext={handleSubmit(onNext)}
              onPrevious={onPrevious}
              value={stepData[currentStep]?.[component?.data?.name]}
            />
          ))}
        </ContentContainer>
      </Container>
    </FormProvider>
  );
};

export default Step;
