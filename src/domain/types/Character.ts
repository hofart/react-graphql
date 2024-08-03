export type Character = {
  name: string;
  image: string;
  id: string;
  species: string;
};

export type CharactersData = {
  results: Character[];
};

export type CharactersVars = {
  page: number;
  search?: string
};