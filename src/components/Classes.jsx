import * as  React from "react"
import Class from "./Class"
import API from "../services/API.js";

function Classes(profile){
    const [classes, setClasses] = React.useState([{CLASS:"", SCHOOL:"", PROF:""}]);
    const[change, setChange] = React.useState({CLASS:"", SCHOOL:"", PROF:""});

    var inProfile = profile;
    const deletedClass = (CLASS, SCHOOL) => {
        console.log(CLASS);
        if(classes){
            for(var i = 0; i < classes.length; i++) {
                if(classes[i].CLASS === CLASS && classes[i].SCHOOL === SCHOOL){
                    var newClasses = [...classes];
                    console.log("removing",CLASS);
                    newClasses.splice(i, 1);
                    setClasses(newClasses);
                    console.log("removed");
                }
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(change);
        const api = new API();
        let val = Object.values(change).every((item) => {
            return item === "";
        })
        if(!val){
            var repeat = false;
            for(var i = 0; i < classes.length; i++){
                if(classes[i].CLASS === change.CLASS && classes[i].SCHOOL === change.SCHOOL){
                    repeat = true;
                    break;
                }
            }

            if(!repeat)
            {
                
                api.postUpdateClasses(change).catch((reason) => {
                    console.log(reason);
                }).then(()=>
                    {
                        if(classes && classes.length){
                            var newClasses = [...classes];
                            newClasses.push(change);
                            setClasses(newClasses);
                        }
                    }
                )
                
            }
            else{
                alert("Class already exists!");
            }
            
            
            
        }
        else{
            console.log("no changes recorded")
        }

    }

    React.useEffect(()=>{
        const api = new API();
        api.getClasses().then((newC) => {
            setClasses(newC);
        }).catch((reason) => {
            console.log(reason);
        })   
    },[]);

    return(
    
        <div className={"m-4  " + (inProfile.profile ? "flex space-x-4" : "")}>
            
            { classes && classes.length && classes.map((classes, index) => {
                return <Class deletedClass={deletedClass} key={index} CLASS={classes.CLASS} SCHOOL={classes.SCHOOL} PROF={classes.PROF} profile={profile}/>
            })}
            {/* ((classes && inProfile.profile===true && classes.length<6) || (!classes.length && inProfile.profile===true)) */}
            
            {  classes && inProfile.profile===true && 
            
                (<form onSubmit={handleSubmit}>
                    
                    <div className="flex flex-col py-4 px-12 grid-cols-1 items-start h-60 w-96 border rounded-lg my-4 shadow-lg bg-white">
                        <div className="grid grid-cols-1 gap-1 field mx-auto">
                            <div className="text-xl">Add Class:</div>
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
                            
                            <button type="submit" className=" border-gray-300 bg-blue-500 hover:bg-blue-700 h-10 rounded-lg text-sm focus:outline-none inset-x-center  w-60 text-white font-bold" >
                                Add class
                            </button>
                        </div>
                        
                        
                        
                    </div>
                    

                </form>)
            }
        </div>
    
    )



}

export default Classes ;