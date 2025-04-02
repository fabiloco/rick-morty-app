import { CharacterCard } from "../../features/characters/characterCard";
import { SearchBar } from "../searchBar";

export const Sidebar = () => {
  return (
    <div className="md:w-1/3 w-full h-full bg-gray-50 px-6 py-12">
      <h2 className="text-2xl mb-8 font-bold">Rick and Morty list</h2>

      <SearchBar
        placeholder="Search or filter results"
      />

      <h2 className="text-xs px-6 mb-8 font-semibold text-gray-500 uppercase">Starred characters (#)</h2>
      <CharacterCard />
    </div>
  )
};