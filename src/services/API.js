var url = "https://second-fullstack.herokuapp.com"
//var url = "http://localhost:3001"
class API{
    


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
            let response = await fetch(`${url}/api/signIn`, {
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