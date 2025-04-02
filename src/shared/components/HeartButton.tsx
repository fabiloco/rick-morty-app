import heart from '../../assets/heart.svg';
import greenHeart from '../../assets/green-heart.svg'
import { FC } from 'react';

export type HeartButtonProps = {
  isActive?: boolean;
  onClick?: () => void;
}

export const HeartButton: FC<HeartButtonProps> = ({
  isActive = false,
  onClick,
}) => {

  const heartIcon = isActive ? greenHeart : heart
  
  return (
    <div className="bg-white w-8 h-8 p-1 rounded-full ml-auto flex align-bottom items-center justify-center cursor-pointer transition-all duration-300 ease-in-out">
      <img className='w-full h-full' src={heartIcon} alt="heart" />
    </div>
  )
}
