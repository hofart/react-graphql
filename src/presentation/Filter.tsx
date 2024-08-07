import React from "react";

interface FilterProps {
  getCharacters: (event: React.FormEvent<HTMLFormElement>) => void
  setFilter: (filter: boolean) => void
  setSearch: (search: string) => void
  filter: boolean
  search: string
}

const Filter = ({ filter, getCharacters, setFilter, search, setSearch }: FilterProps) => {
  const handleFilter = () => {
    setFilter(!filter)
  }

  return (
    <form onSubmit={getCharacters}>
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="text name character"
      />
      <button onClick={handleFilter}>Buscar</button>
    </form>
  )
}

export default Filter