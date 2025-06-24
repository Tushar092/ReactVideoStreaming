import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeScreen from "./Components/Homescreen";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <HomeScreen
                defaultVideoUrl={"https://www.youtube.com/watch?v=0lLmU-VqXzk"}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
