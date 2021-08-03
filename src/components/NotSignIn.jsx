import * as React from "react";
import SignUp from "./SignUp.jsx";
import SignIn from "./SignIn.jsx";
import { NavLink, Route, Switch } from 'react-router-dom';

function NotSignIn(){
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if(isAuthenticated) window.open("/","_self");
    return(
        <div>
            <nav> 
            <ul className="px-2 py-0">
                <div className="flex justify-center ">
                    <NavLink 
                        exact className="inline-block border rounded-lg py-2 halfwid hover:bg-blue-700 hover:text-white bg-white text-gray-500 text-center font-medium shadow-sm" 
                        activeClassName="current" to='/NotSignedIn/Signin'>Sign in
                    </NavLink>
                    <NavLink 
                        exact className="inline-block border rounded-lg py-2 halfwid hover:bg-blue-700 hover:text-white bg-white text-gray-500 text-center font-medium shadow-sm" 
                        activeClassName="current" to='/NotSignedIn/Signup'>Sign up
                    </NavLink>
                    

                </div>
            </ul>
        </nav>

        <Switch>
            <Route exact path='/NotSignedIn/Signup' component={SignUp}></Route>
            <Route exact path='/NotSignedIn/Signin' component={SignIn}></Route>
        </Switch>
        </div>
    )
}
export default NotSignIn;