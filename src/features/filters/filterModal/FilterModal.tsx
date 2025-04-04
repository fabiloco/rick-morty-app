import { FC, useState } from "react";
import { Filter, filters } from "../constants/filters";
import { useSelectedFilters, useSetFilter } from "../store/filter.store";

export const FilterModal = () => {
  const selectedFilters = useSelectedFilters();
  const setFilter = useSetFilter();

  const [tempFilters, setTempFilters] = useState(selectedFilters);

  const handleSelect = (filterKey: string, optionTitle: string) => {
    setTempFilters((prev) => ({ ...prev, [filterKey]: optionTitle }));
  };

  const applyFilters = () => {
    Object.entries(tempFilters).forEach(([key, value]) => {
      setFilter(key, value);
    });
  };

  return (
    <div className="absolute right-0 mt-6 w-full bg-white rounded-lg shadow-lg z-10 p-6">
      {filters.map((filter) => (
        <FilterSection key={filter.id} filter={filter} selectedFilters={tempFilters} onSelect={handleSelect} />
      ))}
      
      <button
        className="w-full mt-4 bg-gray-100 text-gray-500 py-2 rounded-lg transition-all hover:bg-primary-600 hover:text-white hover:cursor-pointer"
        onClick={applyFilters}
      >
        Filtrar
      </button>
    </div>
  );
};

export type FilterSectionProps = {
  filter: Filter;
  selectedFilters: Record<string, string>;
  onSelect: (filterKey: string, optionTitle: string) => void;
};

export const FilterSection: FC<FilterSectionProps> = ({ filter, selectedFilters, onSelect }) => {
  return (
    <div className="mb-6">
      <h6 className="text-md text-gray-500 font-medium mb-3">{filter.title}</h6>
      <div className="flex gap-3">
        {filter.options.map((option) => (
          <label
            key={option.id}
            className={`flex-1 text-sm font-semibold py-4 rounded-lg border border-gray-200 flex items-center justify-center cursor-pointer transition-all ${
              selectedFilters[filter.key] === option.title ? "bg-primary-100 text-primary-700" : "hover:bg-gray-100"
            }`}
          >
            <input
              type="radio"
              name={filter.id}
              value={option.id}
              checked={selectedFilters[filter.key] === option.title}
              onChange={() => onSelect(filter.key, option.title)}
              className="hidden"
            />
            {option.title}
          </label>
        ))}
      </div>
    </div>
  );
};
