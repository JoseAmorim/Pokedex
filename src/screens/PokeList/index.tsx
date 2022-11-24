import * as React from 'react';
import {StatusBar, FlatList, useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {gql, useQuery} from '@apollo/client';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamsList} from '../../routes';
import PokeItem from '../../components/PokeItem';

import Logo from '../../../assets/images/International_Pokémon_logo.png';

import {
  Container,
  Header,
  ListContainer,
  PokemonLogo,
  RightPlaceholder,
  SearchBar,
  SearchBarButton,
  SearchBarTextInput,
  Title,
} from './styles';

export interface BasePokemon {
  name: string;
  id: number;
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
  };
}

const POKEMONS_QUERY = gql`
  query Pokemons {
    pokemon_v2_pokemon {
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
      }
    }
  }
`;

const PokeList: React.FC = () => {
  const {data} = useQuery(POKEMONS_QUERY);

  const [pokemons, setPokemons] = React.useState<BasePokemon[]>([]);
  const [allPokemons, setAllPokemons] = React.useState<BasePokemon[]>([]);
  const [search, setSearch] = React.useState('');

  const {width} = useWindowDimensions();
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();

  React.useEffect(() => {
    if (data) {
      setPokemons(data.pokemon_v2_pokemon);
      setAllPokemons(data.pokemon_v2_pokemon);
    }
  }, [data]);

  const handlePokemon = (id: number) => {
    navigation.push('Details', {id});
  };

  const handleSearch = () => {
    setPokemons(
      allPokemons.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      ),
    );
  };

  return (
    <Container>
      <StatusBar backgroundColor="#21386e" />
      <Header>
        <RightPlaceholder />
        <PokemonLogo source={Logo} />
        <RightPlaceholder />
      </Header>
      <ListContainer>
        <Title>More than 250 Pokemons for you to choose your favorite</Title>
        <SearchBar>
          <Icon name="search1" size={16} color="#3663AD" />
          <SearchBarTextInput
            placeholder="Search Pokémon"
            onChangeText={setSearch}
            onEndEditing={handleSearch}
            value={search}
          />
          <SearchBarButton onPress={handleSearch}>
            <Icon name="arrowright" size={16} color="#fff" />
          </SearchBarButton>
        </SearchBar>
        <FlatList
          data={pokemons}
          extraData={allPokemons}
          numColumns={2}
          style={{flex: 1, marginTop: 15}}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <PokeItem
              pokemon={item}
              width={width * 0.44}
              onPokePress={() => handlePokemon(item.id)}
            />
          )}
          contentContainerStyle={{
            paddingTop: 10,
          }}
        />
      </ListContainer>
    </Container>
  );
};

export default PokeList;
