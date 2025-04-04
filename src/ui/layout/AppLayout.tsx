import { Outlet, useParams } from "react-router";
import { Sidebar } from "../sidebar"
import { FC } from "react";

export type AppLayoutProps = {
  isMd: boolean;
}

export const AppLayout: FC<AppLayoutProps> = ({ isMd }) => {
  const { id } = useParams();

  const showMobile = id && !isMd; 
  const showMobileStyles = "absolute top-0 left-0 w-full h-screen bg-white z-10"

  return (
    <div className="flex h-screen w-screen">
      <nav className="md:w-[400px] w-full h-screen overflow-auto bg-gray-50 px-6 py-12">
        <Sidebar />
      </nav>
      <main className={`lg:block md:block flex-1 h-full bg-white ${showMobile ? showMobileStyles : "hidden"}`}>
        <Outlet/>
      </main>
    </div>
  )
};