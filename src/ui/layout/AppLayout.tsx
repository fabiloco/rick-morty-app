import { Outlet } from "react-router";
import { Sidebar } from "../sidebar"

export const AppLayout = () => {
  return (
    <div className="flex h-screen w-screen">
      <nav className="md:w-[400px] w-full h-screen overflow-auto bg-gray-50 px-6 py-12">
        <Sidebar />
      </nav>
      <main className="lg:block md:block hidden flex-1 h-full bg-white">
        <Outlet/>
      </main>
    </div>
  )
};