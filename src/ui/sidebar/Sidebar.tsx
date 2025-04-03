import { CharacterList } from "../../features/characters/characterList";
import { useCharacters, useStarredCharacters } from "../../features/characters/store/character.store";
import { SearchBar } from "../searchBar";

export const Sidebar = () => {
  const characters = useCharacters();
  const starredCharacters = useStarredCharacters();

  console.log(starredCharacters)

  return (
    <div className="md:w-1/3 w-full h-screen overflow-auto bg-gray-50 px-6 py-12">
      <h2 className="text-2xl mb-8 font-bold">Rick and Morty list</h2>

      <SearchBar
        placeholder="Search or filter results"
      />

      <h3 className="text-xs px-6 mb-8 font-semibold text-gray-500 uppercase">Starred characters ({starredCharacters.length})</h3>

      {characters && <CharacterList characters={starredCharacters} />}

      <h3 className="text-xs px-6 mb-8 mt-10 font-semibold text-gray-500 uppercase">characters ({characters.length})</h3>

      {characters && <CharacterList characters={characters} />}
    </div>
  )
};