import { SidebarLeft } from "./sidebarLeft";
import { SidebarRight } from "./sidebarRight";
import { Outlet } from "react-router-dom";

export default function SortingIndex() {
  return (
    <>
      <main className="h-screen w-screen bg-black text-white font-krub">
        <div className="flex h-full">
          <SidebarLeft />
          <Outlet />
          <SidebarRight />
        </div>
      </main>
    </>
  );
}
