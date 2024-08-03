import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../../infrastructure/graphql/queries";
import { CharactersData, CharactersVars } from "../../domain/types/Character";

/**
 * Custom hook for fetching characters data.
 * 
 * @param page - The page number to fetch characters from.
 * @returns An object containing the fetched data, loading state, and error state.
 */
export const useCharacters = (page: number, search: string, filter: boolean) => {
  const { data, loading, error, refetch } = useQuery<{ characters: CharactersData }, CharactersVars>(GET_CHARACTERS, {
    variables: { page, search },
    skip: !filter
  });

  return {
    characters: data?.characters.results || [],
    loading,
    error,
    refetch
  };
};