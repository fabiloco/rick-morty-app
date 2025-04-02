import { Sidebar } from "../sidebar"

export const AppLayout = () => {
  return (
    <div className="flex h-screen w-screen">
      {/* 25% - 75% */}
      <Sidebar />
      <div className="md:w-2/3 h-full bg-white"></div>
    </div>
  )
};