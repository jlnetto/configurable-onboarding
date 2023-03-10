import type { ComponentProps } from '../../types/core';
import { StyledDescription } from './styles';

type DescriptionProps = ComponentProps;

const Description: React.FC<DescriptionProps> = ({ text, styles }) => {
  return <StyledDescription style={styles}>{text}</StyledDescription>;
};

export default Description;
