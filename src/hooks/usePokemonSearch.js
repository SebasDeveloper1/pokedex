import React, { useState } from "react";

export function usePokemonSearch({ pokemonsList }) {
  const [searchValue, setSearchValue] = useState("");

  let searchedPokemons = [];

  if (!searchValue.length >= 1) {
    searchedPokemons = pokemonsList;
  } else {
    searchedPokemons = pokemonsList.filter((pokemon) => {
      const types = pokemon?.types;
      const pokemonTypes = [];
      types.forEach((element) => pokemonTypes.push(element.type.name));

      const infoProj = [pokemon?.name, pokemonTypes.join(" / ")]
        .join(",")
        .toLowerCase()
        .trim();
      const searchText = searchValue.toLowerCase().trim();
      return infoProj.includes(searchText);
    });
  }

  return {
    searchValue,
    setSearchValue,
    searchedPokemons,
  };
}
