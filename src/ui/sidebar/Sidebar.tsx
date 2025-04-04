import { useState } from "react";

import { CharacterList } from "../../features/characters/characterList";
import { useCharacters, useSortCharactersAsc, useSortCharactersDesc, useStarredCharacters } from "../../features/characters/store/character.store";
import { useResetFilters, useSelectedFilters } from "../../features/filters/store/filter.store";
import { SearchBar } from "../searchBar";

import closeIcon from "../../assets/close.svg";
import sortIcon from "../../assets/sort.svg";

export const Sidebar = () => {
  const characters = useCharacters();
  const starredCharacters = useStarredCharacters();

  const filters = useSelectedFilters();
  const resetFilters = useResetFilters();

  const [sorted, setSorted] = useState(false);

  const filterArray = Object.entries(filters).map(([key, value]) => {
    if (key === "name") return null;
    if (value === null) return null;
    return { [key]: value };
  }).filter(Boolean);

  const sortCharactersAsc = useSortCharactersAsc();
  const sortCharactersDesc = useSortCharactersDesc();

  const toggleSort = () => {
    if (sorted) {
      sortCharactersAsc();
    } else {
      sortCharactersDesc();
    }
    setSorted(!sorted);
  }

  const sortButton = () => (
      <button
        className={`hover:cursor-pointer ${!sorted && "bg-primary-100"} hover:bg-primary-100 w-9 h-9 flex justify-center items-center rounded-lg`}
        onClick={toggleSort}
      >
        <img src={sortIcon} alt="Options icon" />
      </button>
  )

  return (
    <div>
      <h2 className="text-2xl mb-8 font-bold">Rick and Morty list</h2>

      <SearchBar
        placeholder="Search or filter results"
      />

      {filterArray.length > 0 && (
        <div className="px-4 flex w-full justify-between mb-8">
          <p className="text-sm text-blue-600 font-semibold">{characters.length} Results</p>

          <div className="flex gap-1 items-center">
            <p className="text-xs text-green-600 bg-green-100 py-1 px-4 rounded-full font-semibold">{filterArray.length} Filter</p>
            <button 
              onClick={resetFilters}
            >
              <img className="text-xs text-red-600 hover:bg-red-100 w-full h-full rounded-full font-semibold hover:cursor-pointer" src={closeIcon} alt="" />
            </button>
          </div>
        </div>
      )}

      {filterArray.length <= 0 && (<h3 className="text-xs px-6 mb-8 font-semibold text-gray-500 uppercase">Starred characters ({starredCharacters.length})</h3>)}
      

      {characters && <CharacterList characters={starredCharacters} />}


      <div className="flex justify-between items-center">
        <h3 className="text-xs px-6 mb-8 mt-10 font-semibold text-gray-500 uppercase">characters ({characters.length})</h3>
        {sortButton()}
      </div>

      {characters && <CharacterList characters={characters} />}
    </div>
  )
};