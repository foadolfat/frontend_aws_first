import * as React from "react";
import API from "../services/API.js";

function ChangeForm({makeChanges, newUser}){
    const[change, setChange] = React.useState(newUser);
    
    const handleSubmit = (e) => {
        e.preventDefault();
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
            api.postUpdateUser(change).catch((reason) => {
                console.log(reason);
            }).then(makeChanges(change));
            console.log("changes= "+change);
        }
        else{
            console.log("no changes recorded")
        }
        
    }

    return(
        <div className="flex ">
                <form onSubmit={handleSubmit}>

                    <div className="flex flex-col py-4 px-12 grid-cols-1 items-start h-96 w-96 border rounded-lg shadow-lg bg-white">
                        <div className="grid grid-cols-1 gap-1 field mx-auto">

                            <input  className="border-2 border-gray-300 bg-white px-5 pr-14 h-10 w-60 rounded-lg text-sm text-black focus:outline-none"
                                type="text" name="F_NAME" value = {change.F_NAME} placeholder="New First Name" onChange={e => setChange(ev => ({
                                    ...ev,
                                    F_NAME : e.target.value,
                                    }))}/>

                            <input  className="border-2 border-gray-300 bg-white px-5 pr-14 h-10 w-60 rounded-lg text-sm text-black focus:outline-none"
                                type="text" name="L_NAME" value = {change.L_NAME} placeholder="New Last Name" onChange={e => setChange(ev => ({
                                    ...ev,
                                    L_NAME : e.target.value,
                                    }))}/>
                            <input  className="border-2 border-gray-300 bg-white px-5 pr-14 h-10 w-60 rounded-lg text-sm text-black focus:outline-none"
                                type="text" name="DEGREE" value = {change.DEGREE} placeholder="New Degree" onChange={e => setChange(ev => ({
                                    ...ev,
                                    DEGREE : e.target.value,
                                    }))}/>
                            
                            <button type="submit" className=" border-gray-300 bg-blue-500 hover:bg-blue-700 h-10 rounded-lg text-sm focus:outline-none inset-x-center signinbuttonmargin w-60 text-white font-bold" >
                                Submit Changes
                            </button>
                        </div>
                    
                    
                        
                    </div>
                    

                </form>

            </div>
    )
}
export default ChangeForm;