import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types";

const LoginScreen = () => {
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    const action = {
      type: types.login,
      payload: { name: "miltoncode" },
    };

    dispatch(action);
    navigate("/marvel", { replace: true });
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full text-center">
        <div className="mb-4 | text-gray-600">
          <h2 className="font-bold uppercase">Login</h2>
          <hr className="text-gray-300" />
        </div>
        <button
          className="px-2 py-1 | bg-sky-900 text-sky-300 | rounded-md | hover:bg-sky-300 hover:text-sky-900"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
