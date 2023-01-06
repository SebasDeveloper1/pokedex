import { getData } from 'api/index';
export const getPokemonDetails = (pokemonInfo) => {
  const imagePokemon =
    pokemonInfo?.sprites?.other?.dream_world?.front_default ||
    pokemonInfo['sprites']?.other['official-artwork']?.front_default ||
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png';
  const heightPokemon = pokemonInfo?.height / 10;
  const weightPokemon = pokemonInfo?.weight / 10;
  const types = pokemonInfo?.types;
  const pokemonTypes = [];

  if (types) {
    types.forEach((element) => pokemonTypes.push(element?.type?.name));
  }

  const abilities = pokemonInfo?.abilities;
  const pokemonAbilities = [];

  if (abilities) {
    abilities.forEach((element) =>
      pokemonAbilities.push(element?.ability?.name)
    );
  }

  return {
    idPokemon: pokemonInfo?.id,
    namePokemon: pokemonInfo?.name,
    imagePokemon,
    heightPokemon,
    weightPokemon,
    pokemonTypes,
    pokemonAbilities,
    baseExperiencePokemon: pokemonInfo?.base_experience,
  };
};
