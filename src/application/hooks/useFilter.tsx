import React from "react";
import type { RefetchType } from '../../domain/types'

/**
 * Custom hook for filtering characters.
 * 
 * @param refetch - The refetch function to be called when filtering characters.
 * @param search - The search string used for filtering characters.
 * @returns An object containing the `getCharacters` function.
 */
export const useFilter = (refetch: RefetchType, search: string) => {
  const getCharacters = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (search) refetch({ page: 3, search })
  }

  return { getCharacters }
}