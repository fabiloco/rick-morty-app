import { FC } from 'react'
import searchIcon from '../../assets/search.svg'
import optionsIcon from '../../assets/options.svg'

export type SearchBarProps = {
  placeholder?: string
  onChange?: (value: string) => void
  value?: string
}

export const SearchBar: FC<SearchBarProps> = ({placeholder}) => {

  return (
    <div className="p-6 mb-8 gap-3 flex bg-gray-100 rounded-lg">
      <img src={searchIcon} alt="Search icon" />
      <input className='font-medium text-sm w-full outline-none' type="text" placeholder={placeholder} />
      <img src={optionsIcon} alt="Options icon" />

    </div>
  )
}