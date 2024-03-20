import "./App.css";

//Components
import Default from "./components/Authentication/Default";
import Home from "./components/Home";
import DSAnotes from "./components/DSAnotes";
import Notes from "./components/Notes";

import { AuthProvider } from "./components/Authentication/authContext";
import { Route, Routes } from "react-router-dom";
import Header from "./components/navbar";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route exact path="/ScriptQuiz" element={<Default />}></Route>
          <Route path="/ScriptQuiz/home" element={<><Header/><Home /></>}></Route>
          <Route path="/ScriptQuiz/dsa-notes" element={<><Header/><DSAnotes /></>}></Route>
          <Route path="/ScriptQuiz/dsa-notes/:dsId" element={<><Header/><Notes /></>}></Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
