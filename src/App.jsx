import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";

import Home from "./components/home";

import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";

import "./App.css";

function App() {
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ];
  let routesElement = useRoutes(routesArray);
  return (
    <AuthProvider>
      <div className="flex justify-center h-screen w-full overflow-auto">
        {routesElement}
      </div>
    </AuthProvider>
  );
}

export default App;
