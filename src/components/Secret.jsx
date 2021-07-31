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
    // const getContent = ()=> {
    //     const api = new API();
    //     api.getSecret().then((secret) => {
    //         setContent(secret.message);
    //     }).catch((reason) => {
    //         console.log(reason);
    //     })
    // }
    return(
        <div className="bg-red-900 text-white h-screen flex w-1/2">
            {/* {getContent()} */}
            Secret:
            {content && 
                content
            }
        </div>
    )
}

export default Secret;