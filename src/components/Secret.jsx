import * as React from "react";
import API from "../services/API.js";


function Secret(){
    const [content, setContent] = React.useState(null);
    React.useEffect(()=>{
        const api = new API();
        api.getSecret().then((secret) => {
            setContent(secret.message);
        }).catch((reason) => {
            console.log(reason);
        })
    },[]);

    const handleLogOut = () => {
        localStorage.clear();
        window.open("/","_self");
    }

    return(
        <div className="bg-red-900 text-white h-screen flex w-screen">
            <button type="button" onClick={handleLogOut}>
                Logout
            </button>
            Secret:
            {content && 
                content
            }
        </div>
    )
}

export default Secret;