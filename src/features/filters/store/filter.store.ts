import { create } from "zustand";

type FilterState = {
  selectedFilters: Record<string, string>; 
  setFilter: (filterId: string, optionId: string) => void;
  resetFilters: () => void; 
};

export const useFilterStore = create<FilterState>((set) => ({
  selectedFilters: {},

  setFilter: (filterId, optionId) =>
    set((state) => ({
      selectedFilters: { ...state.selectedFilters, [filterId]: optionId },
    })),

  resetFilters: () =>
    set(() => ({
      selectedFilters: {},
    })),
}));

export const useSelectedFilters = () => useFilterStore((state) => state.selectedFilters);
export const useSetFilter = () => useFilterStore((state) => state.setFilter);
export const useResetFilters = () => useFilterStore((state) => state.resetFilters);
