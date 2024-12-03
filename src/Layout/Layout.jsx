import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import RightSide from "../RightSide/RightSide";
import LeftSide from "../LeftSIde/LeftSide";

function Layout() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />

      <div className="relative flex flex-1 mt-4">
        {/* Left Section */}
        <div className="fixed top-16 bottom-0 left-0 mt-6 w-[22%] p-4 overflow-y-auto bg-white">
          <LeftSide />
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-[22%] mr-[22%] pb-10  overflow-y-auto border h-full no-scrollbar max-h-screen">
          <Outlet />
        </div>

        {/* Right Section */}
        <div className="fixed top-16 bottom-0 right-0 w-[22%] p-4 mt-6 overflow-y-auto bg-white">
          <RightSide />
        </div>
      </div>
    </div>
  );
}

export default Layout;
