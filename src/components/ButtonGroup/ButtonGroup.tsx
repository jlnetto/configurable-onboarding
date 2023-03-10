import { ComponentProps } from '../../types/core';
import Button from '../Button';
import { ButtonContainer } from './styles';

type ButtonGroupProps = {
  primaryClick: () => void;
  secondaryClick: () => void;
  disabled?: boolean;
  buttonGroup: ComponentProps[];
};

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  primaryClick,
  secondaryClick,
  buttonGroup,
  disabled,
}) => {
  return (
    <ButtonContainer>
      <Button onClick={secondaryClick} text={buttonGroup[0].text} styles={buttonGroup[0].styles}/>
      <Button type="submit" onClick={primaryClick} text={buttonGroup[1].text} styles={buttonGroup[1].styles} disabled={disabled} />
    </ButtonContainer>
  );
};

export default ButtonGroup;
