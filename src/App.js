import * as React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import NotSignIn from './components/NotSignIn.jsx';
import Profile from './components/Profile.jsx';
import ProtectedRoute from "./services/ProtectedRoute";
import Home from './components/Home.jsx';



function App() {

  return (
    <div className="">

      <BrowserRouter>
        <ProtectedRoute exact path="/" component={Home}></ProtectedRoute>
        <ProtectedRoute exact path="/Home" component={Home}></ProtectedRoute>
        <ProtectedRoute exact path="/Profile" component={Profile}></ProtectedRoute>
        
        <Route path="/NotSignedIn" component={NotSignIn}></Route>
      
        
      </BrowserRouter>
    </div>
  );
}

export default App;
