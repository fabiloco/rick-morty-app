import { FC, Fragment } from "react";

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
          <Fragment key={character.id}>
            <div className="bg-gray-200 w-full h-[1px]"/>
            <CharacterCard  character={character} />
          </Fragment>
        ))}
      </ul>
    </div>
  )
};