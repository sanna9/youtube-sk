import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

function DefaultLayout() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main
          className={`flex-1 p-4 container mx-auto pt-24 pb-16 px-4 ${
            isMenuOpen ? "md:ml-48" : "md:ml-16"
          } overflow-hidden`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DefaultLayout;
