import { Route, Routes } from "react-router"
import { AppLayout } from "../ui"
import { CharacterPage } from "../features/characters/pages"
import { useFetchCharactersByFilter } from "../features/characters/hooks/useFetchCharactersByFilter";
import { useIsMdScreen } from "../shared";

export const AppRouter = () => {
  useFetchCharactersByFilter();

  const isMd = useIsMdScreen();


  return (
    <Routes>
      <Route element={<AppLayout isMd={isMd} />}>
        <Route index element={<CharacterPage isMd={isMd} />} />
        <Route index path="/:id" element={<CharacterPage isMd={isMd} />} />
      </Route>
    </Routes>
  )
}