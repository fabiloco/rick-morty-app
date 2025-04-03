import { useQuery } from "@apollo/client";
import { CharacterList } from "../../features/characters/characterList";
import { SearchBar } from "../searchBar";
import { GET_CHARACTERS } from "../../features/characters/queries/getCharacters";

export const Sidebar = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  return (
    <div className="md:w-1/3 w-full h-screen overflow-auto bg-gray-50 px-6 py-12">
      <h2 className="text-2xl mb-8 font-bold">Rick and Morty list</h2>

      <SearchBar
        placeholder="Search or filter results"
      />

      {loading && <p>Loading...</p>}

      <h3 className="text-xs px-6 mb-8 font-semibold text-gray-500 uppercase">Starred characters (#)</h3>

      {data && <CharacterList characters={data.characters} />}

      <h3 className="text-xs px-6 mb-8 font-semibold text-gray-500 uppercase">characters ({data.characters.length})</h3>

      {data && <CharacterList characters={data.characters} />}
    </div>
  )
};