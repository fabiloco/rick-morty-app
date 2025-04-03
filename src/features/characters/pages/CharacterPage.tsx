import { useParams } from "react-router";
import { useCharacterById } from "../store/character.store";
import { HeartButton } from "../../../shared";
import { InfoCard } from "../infoCard";

export const CharacterPage = () => {

  const { id } = useParams();

  const character = useCharacterById(Number(id));

  if (!character) {
    return (
      <>select some one</>
    )
  }
// md:w-md 
  return (
    <div className="container lg:w-2xl w-full mx-auto pt-10 px-12">
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