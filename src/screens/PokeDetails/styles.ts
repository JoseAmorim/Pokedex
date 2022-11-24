import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {width} = Dimensions.get('window');

interface ColorInterface {
  color: string;
}

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

export const ScrollContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
})`
  flex: 1;
`;

export const DetailsCard = styled.View`
  border-radius: 15px;
  width: 100%;
  background-color: #f3f3f3;
`;

export const TopDetailsBackground = styled.View<ColorInterface>`
  width: 100%;
  height: 120px;
  background-color: ${props => props.color};
  position: absolute;
  top: 0;
  left: 0;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`;

export const TopDetailsContainer = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 10px 25px;
`;

export const ImageContainer = styled.View`
  width: ${width * 0.3}px;
  height: ${width * 0.3}px;
  border-radius: ${width * 0.2}px;

  background-color: rgba(255, 255, 255, 0.5);

  align-items: center;
  justify-content: center;
`;

export const PokeImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const BasicDetailsContainer = styled.View`
  margin-left: 15px;
`;

export const PokeDexNumberContainer = styled.View`
  padding: 0 8px;
  background-color: #ffcb05;
  border-radius: 10px;
  align-self: flex-start;
  margin-top: 18px;
`;

export const PokeDexNumberText = styled.Text`
  font-size: 14px;
  line-height: 17px;
  color: #21386e;
`;

export const PokeName = styled.Text`
  font: normal normal bold 27px/31px Inter;
  color: #fff;
  margin-top: 8px;
`;

export const PokeTypesRow = styled.View`
  margin-top: 7px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: flex-start;
`;

export const PokeType = styled.View`
  padding: 2px 10px;
  border-radius: 20px;
  background-color: rgba(200, 200, 200, 0.5);
  margin-right: 5px;
`;

export const PokeTypeName = styled.Text`
  font: normal normal normal 12px/15px Inter;
  color: #fff;
`;

export const DescriptionText = styled.Text`
  text-align: center;
  font: normal normal normal 14px/16px Inter;
  letter-spacing: 0px;
  color: #21386e;
  margin: 0 15px;
`;

export const MeasuresRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 0 31px;
  margin-top: 12px;
`;

export const MeaseureItem = styled.View`
  align-items: center;
`;

export const MeaseureItemTitle = styled.Text`
  font: normal normal normal 14px/16px Inter;
  letter-spacing: 0px;
  color: #395ba7;
`;

export const MeaseureItemValueContainer = styled.View<ColorInterface>`
  padding: 2px 10px;
  border-radius: 200px;
  background-color: ${props => props.color};
  margin-top: 3px;
`;

export const MeaseureItemValue = styled.Text`
  font: normal normal bold 15px/17px Inter;
  letter-spacing: 0px;
  color: #ffffff;
`;

export const StatsContainer = styled.View`
  margin: 0 20px;
  margin-top: 15px;
`;

export const StatRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 7px;
`;

export const StatTitle = styled.Text`
  font: normal normal 700 15px/18px Inter;
  letter-spacing: 0px;
  color: #21386e;
`;

export const StatValueRow = styled.View`
  width: 50%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const GenderContainer = styled.View`
  width: 50%;
  flex-direction: row;
  align-items: center;
`;

export const StatValue = styled.Text`
  font: normal normal normal 15px/18px Inter;
  letter-spacing: 0px;
  color: #21386e;
  margin-right: 5px;
`;
