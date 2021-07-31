import * as React from "react";
import API from "../services/API.js";

function Home(){
    const [content, setContent] = React.useState(null);
    React.useEffect(()=>{
        const api = new API();
        api.getHome().then((home) => {
            setContent(home.message);
        }).catch((reason) => {
            console.log(reason);
        })
    },[]);
    // const getContent = ()=> {
    //     const api = new API();
    //     api.getHome().then((home) => {
    //         setContent(home.message);
    //     }).catch((reason) => {
    //         console.log(reason);
    //     })
    // }
    return(
        <div className="bg-blue-900 text-white h-screen flex-row w-1/4">
            {/* {getContent()} */}
            Home: 
            {content && 
                content
            }
        </div>
    )
}

export default Home;