// import { Outlet } from "react-router-dom";
// import WelcomeSection from "../components/WelcomeSection";
// import Header from "../components/Header";
// import RightSide from "../RightSide/RightSide";
// import LeftSide from "../LeftSIde/LeftSide";
// import Footer from "../components/Footer";

// function Layout() {
//     return (
//       <div className="flex flex-col">
//         <Header />

//         <div className="grid grid-cols-[10%_65%_25%] h-screen">
//           <div className=" p-4">
//             <LeftSide />
//           </div>

//           <div className=" p-4 flex flex-col">
//             <div>
//               <Outlet />
//             </div>
//           </div>

//           <div className=" p-4">
//             <RightSide />
//           </div>
//         </div>
//         {/* <Footer /> */}
//       </div>
//     );
// }

// export default Layout;


import { Outlet } from "react-router-dom";
import WelcomeSection from "../components/WelcomeSection";
import Header from "../components/Header";
import RightSide from "../RightSide/RightSide";
import LeftSide from "../LeftSIde/LeftSide";
import Footer from "../components/Footer";

function Layout() {
  return (
    <div className="flex flex-col">
      <Header />

      <div className="grid grid-cols-[15%_65%_20%] h-screen">
        <div className="p-4 h-40vh">
          <LeftSide />
        </div>

        <div className="p-4 flex flex-col">
          <div>
            <Outlet />
          </div>
        </div>

        <div className="p-4">
          <RightSide />
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
