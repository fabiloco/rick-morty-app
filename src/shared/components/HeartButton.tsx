import heart from '../../assets/heart.svg';
import greenHeart from '../../assets/green-heart.svg'
import { FC } from 'react';
import { Character } from '../../features/characters/types/character.types';
import { useStarredCharacters, useToggleStarredCharacter } from '../../features/characters/store/character.store';

export type HeartButtonProps = {
  character: Character;
}

export const HeartButton: FC<HeartButtonProps> = ({
  character,
}) => {
  const starredCharacters = useStarredCharacters();

  const isActive = starredCharacters.some((starredCharacter) => starredCharacter.id === character.id);

  const toggleStarredCharacter = useToggleStarredCharacter();

  const heartIcon = isActive ? greenHeart : heart

  const onClick = () => {
    toggleStarredCharacter(character);
  }
  
  return (
    <div 
      className="bg-white w-8 h-8 p-1 rounded-full flex align-bottom items-center justify-center cursor-pointer transition-all duration-300 ease-in-out"
      onClick={onClick}
    >
      <img className='w-full h-full' src={heartIcon} alt="heart" />
    </div>
  )
}
