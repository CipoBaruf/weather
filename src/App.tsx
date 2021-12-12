import { Routes, Route } from "react-router-dom";
import { SearchByLocation } from "./features/searchByLocation/SearchByLocation";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchByLocation />} />
      </Routes>
    </div>
  );
}

export default App;
