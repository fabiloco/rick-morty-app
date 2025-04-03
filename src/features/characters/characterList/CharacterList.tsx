import { FC } from "react";

import { CharacterCard } from "../characterCard";
import { Character } from "../types/character.types";

export type CharacterListProps = {
  characters: Array<Character>
}

export const CharacterList: FC<CharacterListProps> = ({characters}) => {
  return (
    <div>
      <ul className="flex flex-col gap-1">
        {characters.map((character: any) => (
          <>
            <div className="bg-gray-200 w-full h-[1px]"/>
            <CharacterCard key={character.id} character={character} />
          </>
        ))}
      </ul>
    </div>
  )
};