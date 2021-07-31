class API{


    async signUp(u, p, c){
        if(u!=='' && p!=='' && c!==''){
            let response = await fetch('/api/signUp', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                username: u,
                password: p,
                classes: c
            })
            })

            console.log(response.status);
            return await response.json();
          
        }
        return {message:"No input!"};
    }

    async getHome(){
        const list = await fetch(`/api/home`);
        console.log(list);
        return await list.json();
    }

    async getSecret(){
        const list = await fetch(`/api/secret`);
        console.log(list);
        return await list.json();
    }
}

export default API;