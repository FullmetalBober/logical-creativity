import styled from 'styled-components';

type colorsType = { [propKey: string]: string };

const colors: colorsType = {
  blue: '#2864b3',
  green: '#2bce69',
  red: '#ce1a1a',
  yellow: '#dfa831',
  purple: '#972bb3',
  pink: '#dd3282',
  gray: '#3F3F46',
}

export const StyledCard = styled.div<{$bgColor?: string}>`
  height: 6rem;
  width: 6rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-align: center;
  background-color: ${props => (props.$bgColor ? colors[props.$bgColor] : colors.gray)}
`;