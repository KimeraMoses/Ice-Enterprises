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
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import "./App.css";
import Header from "./AppBar/Header";

const App = () => {
  return (
    <Router>
      <Paper elevation={0} square>
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
