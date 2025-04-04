import { useNavigate, useParams } from "react-router";
import { useCharacterById } from "../store/character.store";
import { HeartButton } from "../../../shared";
import { InfoCard } from "../infoCard";

import arrowBack from '../../../assets/arrow_back.svg';

import { FC } from "react";

export type CharacterPageProps = {
  isMd: boolean;
}

export const CharacterPage: FC<CharacterPageProps> = ({isMd}) => {

  const { id } = useParams();

  const navigate = useNavigate();

  const character = useCharacterById(Number(id));

  if (!character) {
    return (
      <div className="flex justify-center items-center h-screen w-full flex-col">
        <h2 className="text-gray-400">Select a character to start...</h2>
      </div>
    )
  }
  const showMobile = id && !isMd;

  const onClickBackBtn = () => navigate('/');

  return (
    <div className="container lg:w-2xl w-full mx-auto pt-10 px-12">
      {showMobile && (
        <button 
          className="mb-8 hover:cursor-pointer"
          onClick={onClickBackBtn}
        >
          <img src={arrowBack} alt="" />
        </button>
      )}

      <div className="flex relative w-fit mb-4">
        <img className="w-20 h-20 rounded-full" src={character.image} alt="Person icon" />
        <div className="absolute bottom-0 -right-3">
          <HeartButton character={character} />
        </div>
      </div>
      <h2 className="font-bold text-2xl">{character.name}</h2>

      <InfoCard
        title="Species"
        content={character.species}
      />

      <InfoCard
        title="Status"
        content={character.status}
      />

      <InfoCard
        title="Location"
        content={character.origin}
      />
    </div>
  )
};