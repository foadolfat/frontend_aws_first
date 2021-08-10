import * as React from "react";
import TEST from "./TEST.jsx"
import Suggestions from "./Suggestions.jsx"
import Classes from "./Classes.jsx"

function Home(){

    return(
        <div className="bg-gray-800">
            <TEST/>
            <div className="flex">
                <div className="h-full w-1/4 bg-purple-400 p-4 m-4 shadow-lg rounded-lg">
                    <h1 className="p-4 text-2xl font-bold">Your classes:</h1>
                    <Classes profile={false}/>

                </div>
                <div className="h-screen w-3/4 bg-purple-300 p-4 m-4 shadow-lg rounded-lg">
                    <h1 className="p-4 text-2xl font-bold">Suggested users to study with:</h1>
                    <Suggestions/>

                </div>
            </div>
        </div>
    )
}

export default Home;