import * as React from "react";
import API from "../services/API.js";

function ChangeClasses({handleAddClass, newClasses}){
    const[change, setChange] = React.useState(newClasses);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(change);
        
        const api = new API();
        // const changes = {
        //     F_NAME:"jason///...~`h",
        //     M_NAME:"ddd///...~`h",
        //     L_NAME:"bourne",
        //     DEGREE:"PHD",
        //     MAJOR:"ASS"
        // };
        let val = Object.values(change).every((item) => {
            return item === "";
        })
        if(!val){
            api.postUpdateClasses(change).catch((reason) => {
                console.log(reason);
            })
        }
        else{
            console.log("no changes recorded")
        }
        var newClass = change;
        handleAddClass({newClass});
        
    }

    return(
        <div className="flex ">
                <form onSubmit={handleSubmit}>

                    <div className="flex flex-col py-4 px-12 grid-cols-1 items-start h-96 w-96 border rounded-lg shadow-lg bg-white">
                        <div className="grid grid-cols-1 gap-1 field mx-auto">

                            <input  className="border-2 border-gray-300 bg-white px-5 pr-14 h-10 w-60 rounded-lg text-sm text-black focus:outline-none"
                                type="text" name="CLASS" value = {change.CLASS} placeholder="New Class" onChange={e => setChange(ev => ({
                                    ...ev,
                                    CLASS : e.target.value,
                                    }))}/>

                            <input  className="border-2 border-gray-300 bg-white px-5 pr-14 h-10 w-60 rounded-lg text-sm text-black focus:outline-none"
                                type="text" name="SCHOOL" value = {change.SCHOOL} placeholder="School" onChange={e => setChange(ev => ({
                                    ...ev,
                                    SCHOOL : e.target.value,
                                    }))}/>
                            <input  className="border-2 border-gray-300 bg-white px-5 pr-14 h-10 w-60 rounded-lg text-sm text-black focus:outline-none"
                                type="text" name="PROF" value = {change.PROF} placeholder="Professor" onChange={e => setChange(ev => ({
                                    ...ev,
                                    PROF : e.target.value,
                                    }))}/>
                            
                            <button type="submit" className=" border-gray-300 bg-blue-500 hover:bg-blue-700 h-10 rounded-lg text-sm focus:outline-none inset-x-center signinbuttonmargin w-60 text-white font-bold" >
                                Add class
                            </button>
                        </div>
                    
                    
                        
                    </div>
                    

                </form>

            </div>
    )
}
export default ChangeClasses;