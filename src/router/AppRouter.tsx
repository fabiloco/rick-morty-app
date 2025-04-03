import { Route, Routes } from "react-router"
import { AppLayout } from "../ui"
import { CharacterPage } from "../features/characters/pages"
import { useFetchCharacters } from "../features/characters/hooks/useFetchCharacters";

export const AppRouter = () => {
  const { loading, error } = useFetchCharacters();

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<CharacterPage />} />
        <Route index path="/:id" element={<CharacterPage />} />
      </Route>
    </Routes>
  )
}