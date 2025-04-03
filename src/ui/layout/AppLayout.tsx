import { Outlet } from "react-router";
import { Sidebar } from "../sidebar"

export const AppLayout = () => {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <main className="md:w-2/3 h-full bg-white">
        <Outlet/>
      </main>
    </div>
  )
};