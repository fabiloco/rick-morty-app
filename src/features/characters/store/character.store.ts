import { create } from "zustand"
import { Character } from "../types/character.types"

interface CharacterState {
  characters: Array<Character>;
  setCharacters: (characters: Array<Character>) => void;
}

const useCharacterStore = create<CharacterState>()(
  (set) => ({
    characters: [],
    setCharacters: (characters) => set((state) => ({ characters: [...state.characters, ...characters] })),
  }),
)

export const useCharacters = () =>
  useCharacterStore((state) => state.characters);
