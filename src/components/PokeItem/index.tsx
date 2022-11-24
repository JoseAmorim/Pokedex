import * as React from 'react';
import {BasePokemon} from '../../screens/PokeList';

import {
  Container,
  PokeDexNumberContainer,
  PokeDexNumberText,
  PokeImage,
  PokeImageBackground,
  PokeName,
  PokeType,
  PokeTypeName,
  PokeTypesRow,
} from './styles';

export interface PokeItemProps {
  width: number;
  pokemon: BasePokemon;
  onPokePress: () => void;
}

const PokeItem: React.FC<PokeItemProps> = ({width, pokemon, onPokePress}) => {
  const image = React.useMemo(() => {
    return pokemon.pokemon_v2_pokemonsprites
      ? JSON.parse(pokemon.pokemon_v2_pokemonsprites[0].sprites)
      : '';
  }, [pokemon]);

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
    <Container
      onPress={onPokePress}
      {...{width}}
      color={pokemon.pokemon_v2_pokemonspecy.pokemon_v2_pokemoncolor.name}>
      <PokeDexNumberContainer>
        <PokeDexNumberText>{renderDexNumber(pokemon.id)}</PokeDexNumberText>
      </PokeDexNumberContainer>
      <PokeImageBackground
        {...{width}}
        color={pokemon.pokemon_v2_pokemonspecy.pokemon_v2_pokemoncolor.name}
      />
      <PokeImage {...{width}} source={{uri: image.front_default}} />
      <PokeName>{pokemon.name}</PokeName>
      <PokeTypesRow>
        {pokemon.pokemon_v2_pokemonspecy.pokemon_v2_pokemonegggroups.map(
          item => (
            <PokeType
              color={
                pokemon.pokemon_v2_pokemonspecy.pokemon_v2_pokemoncolor.name
              }>
              <PokeTypeName>{item.pokemon_v2_egggroup.name}</PokeTypeName>
            </PokeType>
          ),
        )}
      </PokeTypesRow>
    </Container>
  );
};

export default PokeItem;
