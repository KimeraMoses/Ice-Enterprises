import React, { useEffect, useRef } from "react";
import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
//===MUI IMPORTS===
import { Paper } from "@material-ui/core";

//===REDUX STORE IMPORTS===

//===COMPONENT IMPORTS===
import Footer from "./Footer/Footer";
import "./App.css";
import "./UI/Theme/ThemeColors.css";
import AppBar from "./AppBar/AppBar";
import Home from "./LandingPage/Home/Home";

const App = () => {
  return (
    <Router>
      <Paper elevation={0} square>
        <AppBar/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/benefits" exact element={<Home />} />
          <Route path="/faqs" exact element={<Home />} />
          <Route path="/our-team" exact element={<Home />} />
          <Route path="/our-story" exact element={<Home />} />
        </Routes>
        <Footer />
      </Paper>
    </Router>
  );
};

export default App;
