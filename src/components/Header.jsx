import useAuthStore from "../store/useAuthStore";
import ImageWrapper from "./ImageWrapper";
import ProfileBar from "./profileBar";
import logo from '../assets/icons/logo.png'
const Header = () => {
    const { isLoggedIn, setIsLoggedIn } = useAuthStore();
    const loggedIn = localStorage.getItem("loggedIn") === "true";

    const handleLogin = () => {
        setIsLoggedIn(true)
    }

    const handleLogout = () => {
        setIsLoggedIn(false)
    }

  return (
    <header
      className={` p-4 flex justify-between items-center shadow-lg top-0 sticky z-50 text-custom_blue ${
        !loggedIn ? "bg-white " : "bg-white "
      }`}
    >
      <div
        className={`text-lg font-bold text-[40px] text-custom_blue`}
      >
        Bosspace
      </div>
      {/* <ImageWrapper src={logo} width={180} height={40}/> */}
      {/* <div className="flex space-x-4 ">
        <a href="#about" className="hover:underline">
          About Us
        </a>
        <a href="#list" className="hover:underline">
          List
        </a>
      </div> */}
      {loggedIn && (
        <div>
          <ProfileBar />
        </div>
      )}

      <div>
        {!loggedIn && (
          <button
            className={`px-4 py-2 bg-white  rounded mr-2`}
            onClick={handleLogin}
          >
            Login
          </button>
        )}

        {loggedIn && (
          <button
            className="px-4 py-2  bg-custom_blue  rounded mr-2 text-white"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
        {!loggedIn && (
          <button className="px-4 py-2 bg-custom_blue rounded text-white">Sign Up</button>
        )}
      </div>
    </header>
  );
};

export default Header;
