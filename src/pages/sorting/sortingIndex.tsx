import { SidebarLeft } from "./sidebarLeft";
import { SidebarRight } from "./sidebarRight";
import { MainView } from "./mainView";

export default function SortingIndex() {
  return (
    <>
      <main className="h-screen w-screen bg-black text-white font-krub">
        <div className="flex h-full">
          <SidebarLeft />
          <MainView />
          <SidebarRight />
        </div>
      </main>
    </>
  );
}
