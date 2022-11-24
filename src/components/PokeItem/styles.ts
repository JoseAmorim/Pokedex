import styled from 'styled-components/native';

interface ContainerProps {
  width?: number;
  color?: string;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: ${props => props.width}px;
  height: ${props => props.width!! * 1.3125}px;
  border-radius: 15px;
  background-color: ${props => props.color};
  margin-bottom: 15px;
  margin-right: 15px;
`;

export const PokeDexNumberContainer = styled.View`
  padding: 0 8px;
  background-color: #ffcb05;
  border-radius: 10px;
  position: absolute;
  top: -7px;
  align-self: center;
  opacity: 1;
`;

export const PokeDexNumberText = styled.Text`
  font-size: 14px;
  line-height: 17px;
  color: #21386e;
`;

export const PokeImageBackground = styled.View<ContainerProps>`
  position: absolute;
  width: ${props => props.width * 0.7}px;
  height: ${props => props.width * 0.7}px;
  border-radius: ${props => props.width}px;
  top: 20px;
  background-color: rgba(200, 200, 200, 0.5);

  align-self: center;
`;

export const PokeImage = styled.Image<ContainerProps>`
  width: ${props => props.width * 0.7}px;
  height: ${props => props.width * 0.7}px;
  margin-top: 20px;
  align-self: center;
`;

export const PokeName = styled.Text`
  margin-top: 5px;
  align-self: center;
  font: normal normal bold 18px/21px Inter;
  color: #fff;
`;

export const PokeTypesRow = styled.View`
  margin-top: 10px;
  margin-left: 13px;
  margin-right: 13px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PokeType = styled.View<ContainerProps>`
  padding: 2px 10px;
  border-radius: 20px;
  background-color: rgba(200, 200, 200, 0.5);
`;

export const PokeTypeName = styled.Text`
  font: normal normal normal 16px/19px Inter;
  color: #fff;
`;
