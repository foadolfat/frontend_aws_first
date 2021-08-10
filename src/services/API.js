var url = "https://second-fullstack.herokuapp.com"
// var url = "http://localhost:3001"
class API{
    
    async addPeer(ID){
        const user = JSON.parse(localStorage.getItem("user"));
        if(user && user.accessToken){
            console.log("making the call");
            let response = await fetch(`${url}/api/addPeer`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token':`${user.accessToken}`
                },
                body: JSON.stringify({ 
                    ID:ID
                })
            }).then(console.log("call made"))
            return await response.json();
           
        }
    }

    async deleteClass(classes){
        const user = JSON.parse(localStorage.getItem("user"));
        if(user && user.accessToken){
            console.log("making the call");
            let response = await fetch(`${url}/api/removeClass`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token':`${user.accessToken}`
                },
                body: JSON.stringify({ 
                    CLASS:classes.CLASS,
                    PROF:classes.PROF,
                    DAYS:classes.DAYS,
                    SCHOOL:classes.SCHOOL,
                    STILL_ATTENDING:classes.STILLATTENDING

                })
            }).then(console.log("call made"));
            return await response.json();
           
        }
    }

    async getSuggestions(){
        const user = JSON.parse(localStorage.getItem("user"));
        let response =
        await fetch(`${url}/api/getSuggestions`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token':`${user.accessToken}`
            }
        })
        // .then(response => response.json()).then(data => {
        //     console.log(data)
        //     return data;
        // })
        return await response.json();
    }

    async postUpdateClasses(newClasses){
        const user = JSON.parse(localStorage.getItem("user"));

        
        if(user && user.accessToken){
            console.log("making the call");
            await fetch(`${url}/api/updateClasses`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token':`${user.accessToken}`
                },
                body: JSON.stringify({ 
                    CLASS:newClasses.CLASS,
                    PROF:newClasses.PROF,
                    DAYS:newClasses.DAYS,
                    SCHOOL:newClasses.SCHOOL,
                    STILL_ATTENDING:newClasses.STILLATTENDING

                })
            }).then(console.log("call made"))
           
        }
    }

    async postUpdateUser(newUser){
        const user = JSON.parse(localStorage.getItem("user"));
        console.log(user);
        console.log(newUser);
        
        if(user && user.accessToken){
            console.log("making the call");
            await fetch(`${url}/api/updateUser`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token':`${user.accessToken}`
                },
                body: JSON.stringify({ 
                    F_NAME:newUser.F_NAME,
                    M_Name:newUser.M_NAME,
                    L_NAME:newUser.L_NAME,
                    DEGREE:newUser.DEGREE,
                    MAJOR:newUser.MAJOR

                })
            }).then(console.log("call made"))
           
        }
    }

    async getClasses(){
        const user = JSON.parse(localStorage.getItem("user"));
        console.log(user);
        if(user && user.accessToken){
            let response = await fetch(`${url}/api/classes`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token':`${user.accessToken}`
                }
            })
            return await response.json();
        }
    }

    async getProfile(){
        const user = JSON.parse(localStorage.getItem("user"));
        console.log(user);
        if(user && user.accessToken){
            let response = await fetch(`${url}/api/profile`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token':`${user.accessToken}`
                }
            })
            return await response.json();
        }
    }

    async signUp(u, p){
        if(u!=='' && p!==''){
            let response = await fetch(`${url}/api/signUp`, {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    EMAIL: u,
                    PASS: p
                })
            })

            console.log(response.status);
            return await response.json();
          
        }
        return {message:"No input!"};
    }

    async signIn(u, p){
        if(u!=='' && p!==''){
            await fetch(`${url}/api/signIn`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    EMAIL: u,
                    PASS: p
                })
            }).then(response => response.json()).then(data => {
                console.log(data)
                localStorage.setItem("user", JSON.stringify(data));
            })
        }
    }

    async getHome(){
        const list = await fetch(`${url}/api/home`);
        console.log(list);
        return await list.json();
    }

    async getSecret(){
        const list = await fetch(`${url}/api/secret`);
        console.log(list);
        return await list.json();
    }
}

export default API;