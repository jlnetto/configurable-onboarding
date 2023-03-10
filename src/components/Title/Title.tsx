import type { ComponentProps } from '../../types/core';
import { StyledTitle } from './styles';

type TitleProps = ComponentProps;

const Title: React.FC<TitleProps> = ({ text, styles }) => {
  return <StyledTitle style={styles}>{text}</StyledTitle>;
};

export default Title;
