import axios from 'axios';

export const getProducts = () => { 
    return axios.get('https://6373cc36716c2e191651797d.mockapi.io/products')
    
} 

