import "./App.css";

//Components
import Default from "./components/Authentication/Default";
import Home from "./components/Home";

import { AuthProvider } from "./components/Authentication/authContext";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/ScriptQuiz" element={<Default />}></Route>
          <Route path="/ScriptQuiz/home" element={<Home />}></Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
