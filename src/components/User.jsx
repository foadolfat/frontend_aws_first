import * as React from "react"
import API from "../services/API"

function User(){
    const [user, setUser] = React.useState({F_NAME:"", L_NAME:"", M_NAME:"", DEGREE:"", EMAIL:""});
    const [editing, setEditing] = React.useState(false);
    const [change, setChange] = React.useState({F_NAME:"", L_NAME:"", M_NAME:"", DEGREE:"", EMAIL:""});
    React.useEffect(()=>{
        const api = new API();
        api.getProfile().then((newU) => {
            setUser(newU);
        }).catch((reason) => {
            console.log(reason);
        })
    },[]);
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const api = new API();
        let val = Object.values(change).every((item) => {
            return item === "";
        })
        if(!val){
            api.postUpdateUser(change).catch((reason) => {
                console.log(reason);
            });

            if(change.F_NAME==="") change.F_NAME=user.F_NAME;
            if(change.M_NAME==="") change.M_NAME=user.M_NAME;
            if(change.L_NAME==="") change.L_NAME=user.L_NAME;
            if(change.DEGREE==="") change.DEGREE=user.DEGREE;
            change.EMAIL=user.EMAIL;
            setUser(change);
            setChange({F_NAME:"", L_NAME:"", M_NAME:"", DEGREE:"", EMAIL:""});

            console.log("changes= "+change);
        }
        else{
            console.log("no changes recorded")
        }
        setEditing(false);
    }
    const handleEdit = (e) => {
        e.preventDefault();
        setEditing(true);
    }
    return(
        // flex flex-col py-4 px-12 grid-cols-1 items-start h-96 w-screen border rounded-lg shadow-lg bg-white
        <div className=" py-4 px-12  h-96 w-full border rounded-lg shadow-lg bg-white">
            {!editing && 
            <form onSubmit={handleEdit}>
                <div className="py-4">
                    <span>Email: </span>{user && user.EMAIL }
                </div>
                <div className="py-4">
                    <span>Name: </span>{user && user.F_NAME }<span> </span>{user && user.L_NAME }
                </div>
                <div className="py-4">
                    <span>Degree: </span>{user && user.DEGREE }
                </div>
                <button type="submit" className=" border-gray-300 bg-blue-500 hover:bg-blue-700 h-10 rounded-lg text-sm focus:outline-none inset-x-center signinbuttonmargin w-60 text-white font-bold" >
                    Edit
                </button>
            </form>}
            {editing && 
            <form onSubmit={handleSubmit}>
                <input  className="border-2 border-gray-300 bg-white px-5 pr-14 h-10 w-60 rounded-lg text-sm text-black focus:outline-none"
                    type="text" name="F_NAME" value = {change.F_NAME} placeholder={user.F_NAME} onChange={e => setChange(ev => ({
                        ...ev,
                        F_NAME : e.target.value,
                        }))}/>

                <input  className="border-2 border-gray-300 bg-white px-5 pr-14 h-10 w-60 rounded-lg text-sm text-black focus:outline-none"
                     type="text" name="L_NAME" value = {change.M_NAME} placeholder={user.M_NAME} onChange={e => setChange(ev => ({
                        ...ev,
                        M_NAME : e.target.value,
                        }))}/>
                <input  className="border-2 border-gray-300 bg-white px-5 pr-14 h-10 w-60 rounded-lg text-sm text-black focus:outline-none"
                    type="text" name="DEGREE" value = {change.L_NAME} placeholder={user.L_NAME} onChange={e => setChange(ev => ({
                        ...ev,
                        L_NAME : e.target.value,
                        }))}/>
                {/* <input  className="border-2 border-gray-300 bg-white px-5 pr-14 h-10 w-60 rounded-lg text-sm text-black focus:outline-none"
                    type="text" name="EMAIL" value = {change.EMAIL} placeholder={user.EMAIL} onChange={e => setChange(ev => ({
                        ...ev,
                        EMAIL : e.target.value,
                        }))}/> */}
                <input  className="border-2 border-gray-300 bg-white px-5 pr-14 h-10 w-60 rounded-lg text-sm text-black focus:outline-none"
                    type="text" name="M_NAME" value = {change.DEGREE} placeholder={user.DEGREE} onChange={e => setChange(ev => ({
                        ...ev,
                        DEGREE : e.target.value,
                        }))}/>
                <button type="submit" className=" border-gray-300 bg-blue-500 hover:bg-blue-700 h-10 rounded-lg text-sm focus:outline-none inset-x-center signinbuttonmargin w-60 text-white font-bold" >
                    Save Changes
                </button>
            </form>}
        </div>


    )
}
export default User;