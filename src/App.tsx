import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { CurrentWeather } from "./features/currentWeather/CurrentWeather";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CurrentWeather />} />
      </Routes>
    </div>
  );
}

export default App;
