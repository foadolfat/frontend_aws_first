import * as React from "react";
import API from "../services/API.js";

function SignUp(){
    const [newUser, setUser] = React.useState({u:"",p:"",c:""});
    const [message, setMessage] = React.useState(null);
    const userRef = React.useRef();
    const passRef = React.useRef();
    const classRef = React.useRef();

    React.useEffect(()=>{
        const api = new API();
        api.signUp(newUser.u, newUser.p, newUser.c).then((response) => {
            setMessage(response.message);
        }).catch((reason) => {
            console.log(reason);
        })
    },[newUser]);

    return(
        <div className="bg-red-900 text-white h-screen flex-row w-3/4">

            
            <h1>Sign up: </h1>
            <div className="flex flex-wrap space-x-1">
                <div>
                    <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm text-black focus:outline-none"
                        type="input" name="username" ref={userRef} placeholder="Username"/>
                </div>
                <div>
                    <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm text-black focus:outline-none"
                        type="input" name="pass" ref={passRef} placeholder="Password"/>
                </div>
                <div>
                    <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm text-black focus:outline-none"
                        type="input" name="classes" ref={classRef} placeholder="Class"/>
                </div>
            
            
            
                <button className="border-gray-300 bg-white h-10 px-5 pr-100 rounded-lg text-sm focus:outline-none text-black" onClick={() => {
                        setUser({
                        u:userRef.current.value,
                        p:passRef.current.value,
                        c:classRef.current.value
                        });
                    }}>
                    Submit
                </button>
            </div>

            <div>
                {message && message}
            </div>

        </div>

    )

}
export default SignUp;