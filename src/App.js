import logo from './logo.svg';
import React from "react";
import MainPage from "./pages/main";
import {Routes, Route} from "react-router-dom";
function App() {
  return (
    <div>

        <Routes>
            <Route path='/main' element={<MainPage/>}/>

        </Routes>
    </div>
  );
}

export default App;
