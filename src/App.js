import Home from "./components/Home.jsx";
import SignUp from "./components/SignUp.jsx";
import Secret from "./components/Secret.jsx";
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="flex">
      <Home/>
      <SignUp/>
    </div>
  );
}

export default App;
