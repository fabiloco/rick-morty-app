import { useState } from 'react';
import optionsIcon from '../../../assets/options.svg';
import { FilterModal } from '../filterModal';

export const FilterButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {

  }

  return (
    <div >
      <button
        className='hover:cursor-pointer hover:bg-primary-100 w-9 h-9 flex justify-center items-center rounded-lg'
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={optionsIcon} alt="Options icon" />
      </button>

      {isOpen && (
        <FilterModal />
      )}
    </div>
  )
};