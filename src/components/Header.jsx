import useAuthStore from "../store/useAuthStore";
import ProfileBar from "./profileBar";

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
      className={`text-white p-4 flex justify-between items-center ${
        !loggedIn ? "bg-blue-500 text-white" : "bg-white text-blue-500"
      }`}
    >
      <div className={`text-lg font-bold ${!loggedIn ? 'text-white' : 'text-blue-500'}`}>Bosspace</div>
      <div className="flex space-x-4">
        <a href="#about" className="hover:underline">
          About Us
        </a>
        <a href="#list" className="hover:underline">
          List
        </a>
      </div>
      {loggedIn && (
        <div>
          <ProfileBar />
        </div>
      )}

      <div>
        {!loggedIn && (
          <button
            className={`px-4 py-2 bg-white text-blue-500 rounded mr-2`}
            onClick={handleLogin}
          >
            Login
          </button>
        )}

        {loggedIn && (
          <button
            className="px-4 py-2  bg-blue-700  rounded mr-2"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
        {!loggedIn && (
          <button className="px-4 py-2 bg-blue-700 rounded">Sign Up</button>
        )}
      </div>
    </header>
  );
};

export default Header;
