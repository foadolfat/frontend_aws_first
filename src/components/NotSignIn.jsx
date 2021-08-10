import * as React from "react";
import NSIBox from "./NSIBox";

function NotSignIn(){
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if(isAuthenticated) window.open("/","_self");
    return(
        <div className="center bg-gray-200 h-screen">
            <NSIBox/>
        </div>
    )
}
export default NotSignIn;