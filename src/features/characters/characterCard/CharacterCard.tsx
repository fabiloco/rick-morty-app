import { FC, useState } from "react";

import { HeartButton } from "../../../shared";
import { Character } from "../types/character.types";
import { useNavigate } from "react-router";

export type CharacterCardProps = {
  character: Character;
};

export const CharacterCard: FC<CharacterCardProps> = ({character}) => {
  const [isActive, setIsActive] = useState(false);

  const navigate = useNavigate();

  const onClick = () => {
    setIsActive(!isActive);
    navigate(`/${character.id}`);  
  }

  return (
    <li>
      <button 
        className={`focus-within:bg-primary-100 w-full h-[74px] flex rounded-lg px-5 py-4 gap-5 items-center`}
        onClick={onClick}
      >
        <img className="w-8 h-8 rounded-full" src={character.image} alt="Person icon" />
        <div className="w-max">
          <h5 className="text-md font-semibold">{character.name}</h5>
          <p className="text-md text-gray-500 text-left">{character.species}</p>
        </div>

        <div className="ml-auto ">
          <HeartButton character={character} />
        </div>
      </button>
    </li>
  )
};