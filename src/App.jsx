import {BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom"
// import Navbar from "./component/nav/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/404/NotFound"


function App() {
    return (
      <div>
        <Router>
            <Switch>
              <Route exact path='/' element ={<Home />} />
              <Route exact path='*' element ={<NotFound />} />
            </Switch>
          </Router>
          
      </div>
    );
  }
  
  export default App