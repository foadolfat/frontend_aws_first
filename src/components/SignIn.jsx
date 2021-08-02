import * as React from "react";
import API from "../services/API.js";


function SignIn(){

    const [newUser, setUser] = React.useState({u:"",p:""});

    const handleSubmit = (e) => {
        console.log(newUser);
        e.preventDefault();
        const api = new API();
        api.signIn(newUser.u, newUser.p).then((response) => {
            if(response.message) {
                alert("Authorized!");
                localStorage.setItem("isAuthenticated", "true");
                window.open("/","_self");
            }
            else {
                alert("Not Authorized!");
                localStorage.clear();
            }
        }).catch((reason) => {
            console.log(reason);
        })
    }
    
    return(
        <div className="flex justify-center ">
            <form onSubmit={handleSubmit}>

                <div className="bg-white rounded-lg border shadow-lg p-12 h-80 relative">
                    <div className="grid grid-cols-1 gap-1">

                        <input required className="border-2 border-gray-300 bg-white h-10 px-5 pr-14 rounded-lg text-sm text-black focus:outline-none"
                            type="text" name="username" value = {newUser.u} placeholder="Username" onChange={e => setUser(ev => ({
                                ...ev,
                                u : e.target.value,
                                }))}/>

                        <input required className="border-2 border-gray-300 bg-white h-10 px-5 pr-14 rounded-lg text-sm text-black focus:outline-none"
                            type="text" name="pass" value = {newUser.p} placeholder="Password" onChange={e => setUser(ev => ({
                                ...ev,
                                p : e.target.value,
                                }))}/>
                        
                        <button type="submit" className=" border-gray-300 bg-blue-500 hover:bg-blue-700 h-10 rounded-lg text-sm focus:outline-none absolute inset-x-center bottom-12 w-40 text-white font-bold" >
                            Sign in
                        </button>
                    </div>
                
                
                    
                </div>
                

            </form>

        </div>

    )

}
export default SignIn;