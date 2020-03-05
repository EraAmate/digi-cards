const allPokemons = ['Agumon', 'Angewomon', 'Gatomon', 'Omnimon', 'Greymoron'];

export function filterDigimons(searchValue) {
  const lowerCaseSearchValue = searchValue.toLowerCase();

  const filteredPokemons = allPokemons.filter(pokemon => {
    return pokemon.toLowerCase().startsWith(lowerCaseSearchValue);
  });
  return filteredPokemons;
}
