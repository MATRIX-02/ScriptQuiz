import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { doSignOut } from "../firebase/auth";

const Header = ({ showQuestionHandler }) => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  return (
    userLoggedIn && (
      <nav className="flex justify-end items-center gap-x-8 w-full z-20 fixed top-0 left-0 h-12 px-10">
        <button
          onClick={() => {
            doSignOut().then(() => {
              navigate("/login");
            });
          }}
          className="text-sm text-white no-underline"
        >
          LOGOUT
        </button>
        <button
          className="text-sm text-white z-20"
          onClick={showQuestionHandler}
        >
          LIBRARY
        </button>
      </nav>
    )
  );
};

export default Header;
