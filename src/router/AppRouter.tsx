import { Route, Routes } from "react-router"
import { AppLayout } from "../ui"
import { CharacterPage } from "../features/characters/pages"
import { useFetchCharactersByFilter } from "../features/characters/hooks/useFetchCharactersByFilter";

export const AppRouter = () => {
  useFetchCharactersByFilter();

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<CharacterPage />} />
        <Route index path="/:id" element={<CharacterPage />} />
      </Route>
    </Routes>
  )
}