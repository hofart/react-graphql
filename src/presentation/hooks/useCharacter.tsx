import { useQuery, useReactiveVar } from '@apollo/client'
import { GET_CHARACTER } from '../../data/queries/characterQueries'
import { characterVar, loadingVar } from '../../data/state/state'
import { Character } from '../../domain/entities'

type UseCharacter = {
  character: Character | null
}

export const useCharacter = (id: number): UseCharacter => {
  const character = useReactiveVar(characterVar);

  useQuery(GET_CHARACTER, {
    variables: { id },
    onCompleted: (data) => {
      characterVar(data.character)
      loadingVar(false)
    }
  })

  return {
    character
  }
}
