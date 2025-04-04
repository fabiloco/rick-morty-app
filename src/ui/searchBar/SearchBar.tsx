import { FC, useEffect, useState } from "react";
import searchIcon from "../../assets/search.svg";
import { FilterButton } from "../../features/filters";
import { useSetFilter } from "../../features/filters/store/filter.store";

export type SearchBarProps = {
  placeholder?: string;
};

export const SearchBar: FC<SearchBarProps> = ({ placeholder }) => {
  const setFilter = useSetFilter();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setFilter("name", searchValue.trim());
    }, 300); 

    return () => clearTimeout(delayDebounce);
  }, [searchValue]);

  return (
    <div className="px-6 py-3 mb-8 gap-3 flex bg-gray-100 rounded-lg relative">
      <img src={searchIcon} alt="Search icon" />
      <input
        className="font-medium text-sm w-full outline-none"
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <FilterButton />
    </div>
  );
};
