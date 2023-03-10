import { ComponentTypes, ComponentsConfig } from '../../types/core';
import Title from '../../components/Title';
import Description from '../../components/Description';
import Info from '../../components/Info';
import TextField from '../../components/TextField';
import Dropdown from '../../components/Dropdown';
import Button from '../../components/Button';
import ButtonGroup from '../../components/ButtonGroup';

type ComponentSelectorProps = ComponentsConfig & {
  onNext: Function;
  onPrevious: Function;
  isValid?: boolean;
};

const ComponentSelector = ({
  type,
  ...componentsProps
}: ComponentSelectorProps) => {
  const components = {
    [ComponentTypes.TITLE]: Title,
    [ComponentTypes.DESCRIPTION]: Description,
    [ComponentTypes.INFO]: Info,
    [ComponentTypes.TEXT_FIELD]: TextField,
    [ComponentTypes.DROPDOWN]: Dropdown,
    [ComponentTypes.NEXT_BUTTON]: (props: any) => (
      <Button onClick={componentsProps.onNext} {...props} disabled={!componentsProps.isValid} />
    ),
    [ComponentTypes.BACK_BUTTON]: (props: any) => (
      <Button onClick={componentsProps.onPrevious} {...props} />
    ),
    [ComponentTypes.BUTTON_GROUP]: (props: any) => (
      <ButtonGroup
        secondaryClick={componentsProps.onPrevious}
        primaryClick={componentsProps.onNext}
        disabled={!componentsProps.isValid}
        {...props}
      />
    ),
  };
  const Component = components[type];

  return <Component {...componentsProps} {...componentsProps.data} />;
};

export default ComponentSelector;
