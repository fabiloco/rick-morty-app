import { useEffect } from "react";
import {useQuery } from "@apollo/client";
import { useSetCharacters } from "../store/character.store";
import { GET_CHARACTERS } from "../queries/getCharacters";

export const useFetchCharacters = () => {
  const { data, loading, error } = useQuery(GET_CHARACTERS);
  const setCharacters = useSetCharacters();

  useEffect(() => {
    if (data && data.characters) {
      setCharacters(data.characters);
    }
  }, [data, setCharacters]);

  return { loading, error };
};
