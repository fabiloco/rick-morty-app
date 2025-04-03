import { FC, useState } from "react";

import { HeartButton } from "../../../shared";
import { Character } from "../types/character.types";

export type CharacterCardProps = {
  character: Character;
};

export const CharacterCard: FC<CharacterCardProps> = ({character}) => {
  const [isActive, setIsActive] = useState(false);

  const bgColor = isActive ? 'bg-primary-100' : '';

  return (
    <li className={`${bgColor} w-full h-[74px] flex rounded-lg px-5 py-4 gap-5 items-center`}>
      <img className="w-8 h-8 rounded-full" src={character.image} alt="Person icon" />
      <div className="w-max">
        <h2 className="text-md font-semibold">{character.name}</h2>
        <p className="text-md text-gray-500">{character.species}</p>
      </div>
      <HeartButton />
    </li>
  )
};