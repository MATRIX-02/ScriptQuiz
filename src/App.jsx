import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";

import Home from "./components/home";

import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";

import './App.css'

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
      
      <div className=" flex justify-center pt-32 h-full md:pt-0" style={{
        background: "#c94b4b",
        background: "-webkit-linear-gradient(to left, #c94b4b, #4b134f)",
        background: "linear-gradient(to left, #c94b4b, #4b134f)",
      }}>{routesElement}</div>
    </AuthProvider>
  );
}

export default App;