import {gql, useQuery} from '@apollo/client';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import * as React from 'react';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IoniIcon from 'react-native-vector-icons/Ionicons';
import AbilityProgressBar from '../../components/AbilityProgressBar';
import {StackParamsList} from '../../routes';

import Logo from '../../../assets/images/International_Pokémon_logo.png';

import {
  Container,
  Header,
  BackButton,
  PokemonLogo,
  RightPlaceholder,
  ScrollContainer,
  DetailsCard,
  TopDetailsBackground,
  ImageContainer,
  BasicDetailsContainer,
  TopDetailsContainer,
  PokeTypesRow,
  PokeTypeName,
  PokeName,
  PokeType,
  PokeDexNumberContainer,
  PokeDexNumberText,
  DescriptionText,
  MeasuresRow,
  MeaseureItem,
  MeaseureItemTitle,
  MeaseureItemValue,
  MeaseureItemValueContainer,
  StatsContainer,
  StatRow,
  StatTitle,
  StatValueRow,
  GenderContainer,
  StatValue,
  PokeImage,
} from './styles';

interface PokemonDetails {
  id: number;
  name: string;
  pokemon_v2_pokemonsprites: {
    sprites: string;
  }[];
  pokemon_v2_pokemonspecy: {
    pokemon_v2_pokemoncolor: {
      name: string;
    };
    pokemon_v2_pokemonegggroups: {
      pokemon_v2_egggroup: {
        name: string;
      };
    }[];
    gender_rate: number;
    pokemon_v2_pokemons: {
      pokemon_v2_pokemonstats: {
        base_stat: number;
        pokemon_v2_stat: {
          name: string;
        };
      }[];
    }[];
    has_gender_differences: boolean;
    pokemon_v2_pokemonspeciesflavortexts: {
      flavor_text: string;
    }[];
  };
  pokemon_v2_pokemonabilities: {
    pokemon_v2_ability: {
      name: string;
      is_main_series: boolean;
    };
  }[];
  weight: number;
  height: number;
}

const DETAILS_QUERY = gql`
  query Pokemon($id: Int!) {
    pokemon_v2_pokemon(where: {id: {_eq: $id}}) {
      id
      name
      pokemon_v2_pokemonsprites {
        sprites
      }
      pokemon_v2_pokemonspecy {
        pokemon_v2_pokemoncolor {
          name
        }
        pokemon_v2_pokemonegggroups {
          pokemon_v2_egggroup {
            name
          }
        }
        gender_rate
        pokemon_v2_pokemons {
          pokemon_v2_pokemonstats {
            base_stat
            pokemon_v2_stat {
              name
            }
          }
        }
        has_gender_differences
        pokemon_v2_pokemonspeciesflavortexts {
          flavor_text
        }
      }
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          name
          is_main_series
        }
      }
      weight
      height
    }
  }
`;

const PokeDetails: React.FC = () => {
  const {id} = useRoute<RouteProp<StackParamsList, 'Details'>>().params;
  const navigation = useNavigation();

  const [pokemonDetails, setPokemonDetails] = React.useState<
    PokemonDetails | undefined
  >(undefined);

  const {data, error} = useQuery(DETAILS_QUERY, {
    variables: {
      id,
    },
  });

  const totalStats = React.useMemo(() => {
    if (!pokemonDetails) {
      return 0;
    }

    return pokemonDetails.pokemon_v2_pokemonspecy.pokemon_v2_pokemons[0].pokemon_v2_pokemonstats.reduce(
      (pv, cv) => pv + cv.base_stat,
      0,
    );
  }, [pokemonDetails]);

  React.useEffect(() => {
    if (data) {
      console.log({data: data.pokemon_v2_pokemon[0]});

      setPokemonDetails(data.pokemon_v2_pokemon[0]);
    }
  }, [data, error]);

  const image = React.useMemo(() => {
    return pokemonDetails?.pokemon_v2_pokemonsprites
      ? JSON.parse(pokemonDetails?.pokemon_v2_pokemonsprites[0].sprites)
      : '';
  }, [pokemonDetails]);

  const renderDexNumber = (dexNumber: number) => {
    if (dexNumber < 10) {
      return `#00${dexNumber}`;
    }
    if (dexNumber < 100) {
      return `#0${dexNumber}`;
    }
    return `#${dexNumber}`;
  };

  return (
    <Container>
      <StatusBar backgroundColor="#21386e" />
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="arrowleft" size={24} color="#fff" />
        </BackButton>
        <PokemonLogo source={Logo} />
        <RightPlaceholder />
      </Header>
      <ScrollContainer>
        <DetailsCard>
          <TopDetailsBackground color="green" />
          <TopDetailsContainer>
            <ImageContainer>
              <PokeImage
                source={{
                  uri: image.front_default,
                }}
              />
            </ImageContainer>
            <BasicDetailsContainer>
              <PokeDexNumberContainer>
                <PokeDexNumberText>
                  {renderDexNumber(pokemonDetails?.id ?? 1)}
                </PokeDexNumberText>
              </PokeDexNumberContainer>
              <PokeName>{pokemonDetails?.name}</PokeName>
              <PokeTypesRow>
                {pokemonDetails?.pokemon_v2_pokemonspecy.pokemon_v2_pokemonegggroups.map(
                  item => (
                    <PokeType>
                      <PokeTypeName>
                        {item.pokemon_v2_egggroup.name}
                      </PokeTypeName>
                    </PokeType>
                  ),
                )}
              </PokeTypesRow>
            </BasicDetailsContainer>
          </TopDetailsContainer>
          <DescriptionText>
            {pokemonDetails?.pokemon_v2_pokemonspecy.pokemon_v2_pokemonspeciesflavortexts[0].flavor_text.replaceAll(
              '\n',
              '',
            )}
          </DescriptionText>
          <MeasuresRow>
            <MeaseureItem>
              <MeaseureItemTitle>Weight:</MeaseureItemTitle>
              <MeaseureItemValueContainer color="green">
                <MeaseureItemValue>
                  {pokemonDetails?.weight}lbs
                </MeaseureItemValue>
              </MeaseureItemValueContainer>
            </MeaseureItem>
            <MeaseureItem>
              <MeaseureItemTitle>Height:</MeaseureItemTitle>
              <MeaseureItemValueContainer color="green">
                <MeaseureItemValue>
                  {pokemonDetails?.height}ft
                </MeaseureItemValue>
              </MeaseureItemValueContainer>
            </MeaseureItem>
            <MeaseureItem>
              <MeaseureItemTitle>Major Ability:</MeaseureItemTitle>
              <MeaseureItemValueContainer color="green">
                <MeaseureItemValue>
                  {
                    pokemonDetails?.pokemon_v2_pokemonabilities[0]
                      .pokemon_v2_ability.name
                  }
                </MeaseureItemValue>
              </MeaseureItemValueContainer>
            </MeaseureItem>
          </MeasuresRow>
          <StatsContainer>
            <StatRow>
              <StatTitle>Gender</StatTitle>
              <StatValueRow>
                <GenderContainer>
                  <IoniIcon
                    name="male"
                    size={15}
                    color="#2D5BC6"
                    style={{marginRight: 5}}
                  />
                  <StatTitle>87.5%</StatTitle>
                </GenderContainer>
                <GenderContainer>
                  <IoniIcon
                    name="female"
                    size={15}
                    color="#FF386F"
                    style={{marginRight: 5}}
                  />
                  <StatTitle>12.5%</StatTitle>
                </GenderContainer>
              </StatValueRow>
            </StatRow>
            {pokemonDetails?.pokemon_v2_pokemonspecy.pokemon_v2_pokemons[0].pokemon_v2_pokemonstats.map(
              item => (
                <StatRow>
                  <StatTitle>{item.pokemon_v2_stat.name}</StatTitle>
                  <StatValueRow>
                    <StatValue>{item.base_stat}</StatValue>
                    <AbilityProgressBar stat={item.base_stat} total={100} />
                  </StatValueRow>
                </StatRow>
              ),
            )}

            <StatRow>
              <StatTitle>Total</StatTitle>
              <StatValueRow>
                <StatValue>{totalStats}</StatValue>
                <AbilityProgressBar
                  stat={totalStats}
                  total={
                    pokemonDetails
                      ? pokemonDetails.pokemon_v2_pokemonspecy
                          .pokemon_v2_pokemons[0].pokemon_v2_pokemonstats
                          .length * 100
                      : 100
                  }
                />
              </StatValueRow>
            </StatRow>
          </StatsContainer>
        </DetailsCard>
      </ScrollContainer>
    </Container>
  );
};

export default PokeDetails;
