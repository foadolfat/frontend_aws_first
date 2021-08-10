import * as React from "react";
import Suggestion from "./Suggestion";
import API from "../services/API.js";


function Suggestions(){
    const [userSuggestions, setSuggestions] = React.useState();

    const removeLiked = (id) => {
        console.log(id);
        if(userSuggestions){
            for(var i = 0; i < userSuggestions.length; i++) {
                if(userSuggestions[i].ID === id){
                    var newSuggestions = [...userSuggestions];
                    console.log("removing",id);
                    newSuggestions.splice(i, 1);
                    setSuggestions(newSuggestions);
                    console.log("removed");
                }
            }
        }
    }
    React.useEffect(() => {
        const api = new API();
        api.getSuggestions().then((suggs) => {
            setSuggestions(suggs);
        }).catch((reason => {console.log(reason)}))
    },[]);
    return(
        <div className="px-4 py-4 grid grid-cols-4 justify-between">
            { userSuggestions && userSuggestions.length && userSuggestions.map((sugg, index) => {
                console.log("here we are with ",sugg);
                return <Suggestion removeLiked={removeLiked} key={index} ID={sugg.ID} EMAIL={sugg.EMAIL} SCHOOL={sugg.SCHOOL} CLASS={sugg.CLASS} PROF={sugg.PROF}/>
            })}
        </div>
    )
}

export default Suggestions;