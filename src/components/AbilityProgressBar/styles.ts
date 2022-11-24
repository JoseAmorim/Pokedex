import styled from 'styled-components/native';

interface FillBarProps {
  progress: string;
  color: string;
}

export const Container = styled.View`
  flex: 1;
  height: 6px;
  background-color: #b7b7b8;
  border-radius: 20px;
`;

export const FillBar = styled.View<FillBarProps>`
  width: ${props => props.progress}%;
  height: 6px;
  background-color: ${props => props.color};
  border-radius: 20px;
`;
