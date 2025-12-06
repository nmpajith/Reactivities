import axios from "axios";

const slepp=(ms:number)=>new Promise(resolve=>setTimeout(resolve,ms));

const agent= axios.create({
        baseURL: import.meta.env.VITE_API_URL,
    });

agent.interceptors.response.use(async response => {
    try{
        await slepp(1000);
        return response;
    }catch(error){
        console.log(error);
        return await Promise.reject(error);
    }

});

export default agent;