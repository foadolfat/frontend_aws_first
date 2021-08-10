import * as React from "react";
import API from "../services/API.js";

function Class({deletedClass, CLASS, PROF, SCHOOL, profile}){
    var inProfile = profile;
    console.log(inProfile.profile);
    const [disable, setDisable] = React.useState(false);
    const handleDelete = (e) => {
        e.preventDefault();
        setDisable(true);
        deletedClass(CLASS, SCHOOL);
        const api = new API();
        api.deleteClass({CLASS:CLASS, PROF:PROF, SCHOOL:SCHOOL}).catch((reason) => {
            console.log(reason);
            }
        ).then((reponse)=>{
            console.log(reponse.message);
            
        });
        
        
    }
    return(

        <div className="flex flex-col py-4 px-12 grid-cols-1 items-start h-60 w-96 border rounded-lg shadow-lg bg-white">
            <div className="py-4">
                <span>Class: </span>{CLASS && CLASS }
            </div>
            <div className="py-4">

                <span>School: </span>{SCHOOL && SCHOOL }
            </div>  
            <div className="py-4">
                <span>Professor: </span>{PROF && PROF }
            </div> 
            {inProfile.profile===true && <button disabled={disable} type="button" className=" border-gray-300 bg-red-500 hover:bg-red-700 h-10 rounded-lg text-sm focus:outline-none w-30 px-4 text-white font-bold" onClick={handleDelete}>
                Remove Class
            </button>}
        </div>


        
        
    )
}
export default Class;