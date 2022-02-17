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
import AvailableRentals from "./Dashboard/MenuPanel/AvailableRentals/AvailableRentals";
import Transactions from "./Dashboard/MenuPanel/Transactions/Transactions";
import Users from "./Dashboard/MenuPanel/Users/Users";
import Settings from "./Dashboard/MenuPanel/Settings/Settings";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";

const App = () => {
  return (
    <Router>
      <Paper elevation={0} square>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/privacy-policy" exact element={<PrivacyPolicy />} />
          <Route path="/dashboard/*" element={<Dashboard />}>
            <Route path="user" element={<DashboardItem />} />
            <Route path="active-rentals" element={<ActiveRentals />} />
            <Route path="available-rentals" element={<ActiveRentals />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Paper>
    </Router>
  );
};

export default App;
