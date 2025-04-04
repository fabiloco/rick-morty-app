import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useSetCharacters } from "../store/character.store";
import { useSelectedFilters } from "../../filters/store/filter.store";
import { GET_CHARACTERS_BY_FILTER } from "../queries/getCharactersByFilter";

export const useFetchCharactersByFilter = () => {
  const selectedFilters = useSelectedFilters();

  console.log({selectedFilters})

  const hasActiveFilters = Object.values(selectedFilters).some((v) => v !== null);

  const parsedFilters = hasActiveFilters
    ? Object.entries(selectedFilters)
        .filter(([_, v]) => v !== null)
        .reduce((acc, [k, v]) => ({ ...acc, [k]: v ?? undefined }), {})
    : {};

  // console.log({parsedFilters})

  const { data, loading, error } = useQuery(GET_CHARACTERS_BY_FILTER, {
    variables: parsedFilters,
  });

  const setCharacters = useSetCharacters();

  useEffect(() => {
    if (data && data.charactersByFilter) {
      setCharacters(data.charactersByFilter);
    }
  }, [data, setCharacters]);

  return { loading, error };
};
