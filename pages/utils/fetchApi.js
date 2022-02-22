import axios from 'axios';

export const baseUrl = 'https://my-json-server.typicode.com/zappyrent/frontend-assessment/properties';

export const fetchApi = async (url) => { 
    
    const {data}  = await axios.get((url), {
       
    });
    return data;
} 