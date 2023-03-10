import { useState, useRef, useEffect } from 'react';
import {
  Container,
  StyledDropdown,
  DropdownItems,
  Item,
  HiddenInput,
  Label,
} from './styles';
import ChevronDown from '../../assets/chevron-down.svg';
import { Controller, useFormContext } from 'react-hook-form';
import { ComponentProps } from '../../types/core';

type DropdownProps = ComponentProps & {
  name: string;
};

const Dropdown: React.FC<DropdownProps> = ({
  name,
  label,
  styles,
  options,
}) => {
  const { control } = useFormContext();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <Controller
      control={control}
      defaultValue=""
      name={name}
      render={({ field }) => (
        <Container style={{ fontFamily: styles?.fontFamily }} ref={dropdownRef}>
          <Label>{label}</Label>
          <StyledDropdown onClick={toggleDropdown}>
            <span>
              {options?.find((option) => field.value === option.value)?.label}
            </span>
            <img src={ChevronDown} alt="down" />
          </StyledDropdown>
          {isOpen && (
            <DropdownItems>
              {options?.map((option) => (
                <Item
                  key={option.value}
                  onClick={() => {
                    field.onChange(option.value);
                    setIsOpen(false);
                  }}
                  customBackground={styles?.backgroundColor}
                >
                  {option.label}
                </Item>
              ))}
            </DropdownItems>
          )}
          <HiddenInput {...field} />
        </Container>
      )}
    />
  );
};

export default Dropdown;
