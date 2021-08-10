import * as React from "react";
import TEST from "./TEST.jsx";
import Classes from "./Classes.jsx"
import User from "./User.jsx"
//import Suggestion from "./Suggestion.jsx";

function Profile(){
    
    return(
        
        <div className="w-screen h-screen bg-gray-800 ">
            {console.log("rendering...")}
            <div className="">
                <TEST/>
            </div>
            <div className="h-5/6 w-7/8 bg-purple-400 p-4 m-4 shadow-lg rounded-lg">
                <div className="px-4 ">
                    <div className="px-4 py-4 ">
                        <div className="text-2xl">Your profile and current classes:</div>
                        <User/>
                    </div>
                </div>
                <div className="m-4 ">
                    <div>
                        <div className=" px-4  text-2xl">Current Classes:</div>
                        <Classes profile={true}/>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default Profile;