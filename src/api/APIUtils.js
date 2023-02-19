import { Component } from 'react'
import axios from 'axios'

const apiYahooFinance = axios.create({
    baseURL: 'https://query1.finance.yahoo.com/v7/',
    /*headers:{
        "Content-type": "application/json", 
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS", 
    }*/
});

class APIUtils extends Component{
    getQuote(){
        return apiYahooFinance.get('/finance/quote',{
            params:{
                symbols: 'BBDC3.SA'
            }
        }).catch(error =>{
            console.log(error);
            }
        );
    }   
}

export default new APIUtils();