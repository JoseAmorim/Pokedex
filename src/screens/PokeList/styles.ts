import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  height: 75px;
  width: 100%;
  background-color: #21386e;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;

export const BackButton = styled.TouchableOpacity``;

export const PokemonLogo = styled.Image`
  width: 122px;
  height: 45px;
`;

export const RightPlaceholder = styled.View`
  width: 24px;
`;

export const ListContainer = styled.View`
  flex: 1;
  padding: 0 15px;
`;

export const Title = styled.Text`
  font-size: 24px;
  line-height: 28px;
  color: #21386e;
  font-weight: bold;
  margin-top: 20px;
`;

export const SearchBar = styled.View`
  width: 100%;
  height: 40px;
  border-radius: 20px;
  border: 1px solid #3663ad;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px 0 10px;
  margin-top: 20px;
`;

export const SearchBarTextInput = styled.TextInput`
  font-size: 14px;
  line-height: 17px;
  color: #21386e;
  flex: 1;
  margin-left: 10px;
  height: 40px;
`;

export const SearchBarButton = styled.TouchableOpacity`
  border-radius: 30px;
  background-color: #395ba7;
  padding: 5px;
`;

export const PokeItems = styled.View`
  flex: 1;
  margin-top: 27px;
`;
