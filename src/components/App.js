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
import Dashboard from "./Dashboard/Dashboard";
import DashboardItem from "./Dashboard/MenuPanel/DashboardItem/DashboardItem";
import ActiveRentals from "./Dashboard/MenuPanel/ActiveRentals/ActiveRentals";

const App = () => {
  return (
    <Router>
      <Paper elevation={0} square>
        {/* <AppBar /> */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/dashboard/*" element={<Dashboard />}>
            <Route path="user" element={<DashboardItem />} />
            <Route path="active-rentals" element={<ActiveRentals />} />
          {/* <Route path="blacklist" element={<BlackList />} /> */}
          {/* <Route path="tokens" element={<Tokens />} /> */}
          </Route>
        </Routes>
      </Paper>
    </Router>
  );
};

export default App;
