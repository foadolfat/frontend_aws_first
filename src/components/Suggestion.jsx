import * as React from "react";
import API from "../services/API.js";

function Suggestion({removeLiked, ID, EMAIL, SCHOOL, CLASS, PROF}){
    const [disable, setDisable] = React.useState(false);
    const handleLike = (e) => {
        e.preventDefault();
        setDisable(true);
        const api = new API();
        api.addPeer(ID).catch((reason) => {
            console.log(reason);
            }).then((response) => {
                removeLiked(ID);
                if(response.message && response.message==="match") alert("This user already liked you back, hit em up!");
                console.log("done")
            }
        );
    }
    return(
        <div className="flex flex-col py-4 px-12 m-4 grid-cols-1 items-start h-96 w-96 border rounded-lg shadow-lg bg-white">
            <div className="py-4">
                <span>ID: </span>{ID && ID }
            </div>
            <div className="py-4">
                <span>Email: </span>{EMAIL && EMAIL }
            </div>
            <div className="py-4">
                <span>School: </span>{SCHOOL && SCHOOL }
            </div>
            <div className="py-4">
                <span>Class: </span>{CLASS && CLASS }
            </div>
            <div className="py-4">
                <span>Professor: </span>{PROF && PROF }
            </div>
            <button disabled={disable} type="button" className=" border-gray-300 bg-green-500 hover:bg-green-700 h-10 rounded-lg text-sm focus:outline-none w-30 px-4 text-white font-bold" onClick={handleLike}>
                Like
            </button>
        </div>
    )
}

export default Suggestion;