import { useState } from "react";
import Characters from "./presentation/components/CharacterList"
import Filter from "./presentation/components/Filter"
import { useCharacters } from "./application/hooks/useCharacters";
import { useFilter } from "./application/hooks/useFilter";

function App() {
  const [filter, setFilter] = useState(Boolean)
  const [search, setSearch] = useState("")

  const { characters, loading, refetch } = useCharacters(3, search, filter)
  const { getCharacters } = useFilter(refetch, search)


  return (
    <div>
      <Filter
        getCharacters={getCharacters}
        filter={filter}
        search={search}
        setFilter={setFilter}
        setSearch={setSearch}
      />

      <Characters
        characters={characters}
        loading={loading}
        key={characters.length}
      />
    </div>
  )
}

export default App
