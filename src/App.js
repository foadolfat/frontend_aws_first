import * as React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import NotSignIn from './components/NotSignIn.jsx';
import Secret from './components/Secret.jsx';
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (
    <div className="center bg-gray-200 h-screen">
      <BrowserRouter>
      <Route path="/NotSignedIn" component={NotSignIn}></Route>
      <ProtectedRoute exact path="/" component={Secret}></ProtectedRoute>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
