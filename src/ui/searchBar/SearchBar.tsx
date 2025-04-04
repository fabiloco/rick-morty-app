import { FC } from 'react'
import searchIcon from '../../assets/search.svg'
import { FilterButton } from '../../features/filters'

export type SearchBarProps = {
  placeholder?: string
  onChange?: (value: string) => void
  value?: string
}

export const SearchBar: FC<SearchBarProps> = ({placeholder}) => {

  return (
    <div className="px-6 py-3 mb-8 gap-3 flex bg-gray-100 rounded-lg relative">
      <img src={searchIcon} alt="Search icon" />
      <input className='font-medium text-sm w-full outline-none' type="text" placeholder={placeholder} />
      <FilterButton />

    </div>
  )
}