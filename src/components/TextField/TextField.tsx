import { Wrapper, Label, StyledInput, Hint } from './styles';
import { Controller, useFormContext } from 'react-hook-form';

type TextFieldProps = {
  name: string;
  label: string;
  hint?: string;
  styles?: {
    fontFamily: string;
  };
};

const TextField: React.FC<TextFieldProps> = ({ name, label, hint, styles }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field }) => (
        <Wrapper style={styles}>
          <Label>{label}</Label>
          <StyledInput
            {...field}
          />
          {hint && <Hint>{hint}</Hint>}
        </Wrapper>
      )}
    />
  );
};

export default TextField;
