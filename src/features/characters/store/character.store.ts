import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Character } from "../types/character.types";

interface CharacterState {
  characters: Character[];
  starredCharacters: Character[];
  setCharacters: (characters: Character[]) => void;
  toggleStarredCharacter: (character: Character) => void;
  getCharacterById: (id: number) => Character | null;
  sortCharactersByNameAsc: () => void;
  sortCharactersByNameDesc: () => void;
}

const useCharacterStore = create(
  persist<CharacterState>(
    (set, get) => ({
      characters: [],
      starredCharacters: [],

      setCharacters: (characters) =>
        set({ characters }),

      toggleStarredCharacter: (character) => {
        const { starredCharacters } = get();
        const exists = starredCharacters.some((char) => char.id === character.id);
        set({
          starredCharacters: exists
            ? starredCharacters.filter((char) => char.id !== character.id)
            : [...starredCharacters, character],
        });
      },

      getCharacterById: (id: number) =>
        get().characters.find((char) => char.id === id) || null,

      sortCharactersByNameAsc: () =>
        set((state) => ({
          characters: [...state.characters].sort((a, b) =>
            a.name.localeCompare(b.name)
          ),
        })),

      sortCharactersByNameDesc: () =>
        set((state) => ({
          characters: [...state.characters].sort((a, b) =>
            b.name.localeCompare(a.name)
          ),
        })),
    }),
    {
      name: "character-store",
    }
  )
);


export const useCharacters = () =>
  useCharacterStore((state) => state.characters);

export const useStarredCharacters = () =>
  useCharacterStore((state) => state.starredCharacters);

export const useSetCharacters = () =>
  useCharacterStore((state) => state.setCharacters);

export const useToggleStarredCharacter = () =>
  useCharacterStore((state) => state.toggleStarredCharacter);

export const useCharacterById = (id: number) =>
  useCharacterStore((state) => state.getCharacterById(id));

export const useSortCharactersAsc = () =>
  useCharacterStore((state) => state.sortCharactersByNameAsc);

export const useSortCharactersDesc = () =>
  useCharacterStore((state) => state.sortCharactersByNameDesc);